import type { AddressFormValues, LookupResult, Official } from "../types/lawmakers";

// Served from the same origin — no CORS issues, no external dependency
const LEGISLATORS_URL = `${import.meta.env.BASE_URL}legislators-current.json`;
const COMMITTEES_URL = `${import.meta.env.BASE_URL}legislator-committees.json`;

// ─── Legislator data types ────────────────────────────────────────────────────

interface LegislatorTerm {
  type: "sen" | "rep";
  start: string;
  end?: string;
  state: string;
  party?: string;
  district?: number; // House only; 0 = at-large
  url?: string;
  contact_form?: string;
  phone?: string;
}

interface Legislator {
  id: { bioguide: string };
  name: {
    first: string;
    last: string;
    official_full?: string;
  };
  terms: LegislatorTerm[];
}

// ─── Legislator dataset ───────────────────────────────────────────────────────

let cachedLegislators: Legislator[] | null = null;
let cachedCommittees: Record<string, string[]> | null = null;

async function fetchLegislators(): Promise<Legislator[]> {
  if (cachedLegislators) return cachedLegislators;
  const res = await fetch(LEGISLATORS_URL);
  if (!res.ok) throw new Error("Failed to load congressional directory. Please try again.");
  cachedLegislators = (await res.json()) as Legislator[];
  return cachedLegislators;
}

async function fetchCommittees(): Promise<Record<string, string[]>> {
  if (cachedCommittees) return cachedCommittees;
  const res = await fetch(COMMITTEES_URL);
  cachedCommittees = res.ok ? (await res.json()) as Record<string, string[]> : {};
  return cachedCommittees;
}

function getCurrentTerm(l: Legislator): LegislatorTerm {
  return l.terms[l.terms.length - 1];
}

function normalizeToOfficial(
  l: Legislator,
  chamber: "Senate" | "House",
  committeeMap: Record<string, string[]>
): Official {
  const term = getCurrentTerm(l);
  const name = l.name.official_full ?? `${l.name.first} ${l.name.last}`;
  const urls: string[] = term.url ? [term.url] : [];

  return {
    name,
    office:
      chamber === "Senate"
        ? "United States Senate"
        : "United States House of Representatives",
    party: term.party ?? null,
    state: term.state,
    district: term.district != null ? String(term.district) : null,
    phones: term.phone ? [term.phone] : [],
    urls,
    emails: [],
    photoUrl: `https://bioguide.congress.gov/bioguide/photo/${l.id.bioguide[0]}/${l.id.bioguide}.jpg`,
    contactUrl: term.contact_form ?? urls[0] ?? null,
    address: null,
    committees: committeeMap[l.id.bioguide] ?? [],
  };
}

// ─── Main export ──────────────────────────────────────────────────────────────

export async function lookupLawmakers(form: AddressFormValues): Promise<LookupResult> {
  const addressString = `${form.street}, ${form.city}, ${form.state} ${form.zip}`;
  const state = form.state.toUpperCase();
  const district = form.district.trim();

  const [legislators, committeeMap] = await Promise.all([
    fetchLegislators(),
    fetchCommittees(),
  ]);

  // Always find both senators for the state
  const senators = legislators
    .filter((l) => {
      const t = getCurrentTerm(l);
      return t.type === "sen" && t.state === state;
    })
    .map((l) => normalizeToOfficial(l, "Senate", committeeMap));

  // Parse comma-separated district numbers (e.g. "31" or "31, 10")
  const districts = district
    ? district.split(",").map((d) => d.trim()).filter(Boolean)
    : [];

  const representatives: Official[] = [];
  for (const d of districts) {
    const repRaw = legislators.find((l) => {
      const t = getCurrentTerm(l);
      return (
        t.type === "rep" &&
        t.state === state &&
        String(t.district ?? "0") === d
      );
    });
    if (repRaw) representatives.push(normalizeToOfficial(repRaw, "House", committeeMap));
  }

  return {
    success: senators.length > 0 || representatives.length > 0,
    inputAddress: addressString,
    officials: { senators, representatives },
  };
}
