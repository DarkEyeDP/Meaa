import type { Official, OfficialsResult, OfficialAddress } from "../types/lawmakers";

interface GoogleOfficialRaw {
  name: string;
  party?: string;
  phones?: string[];
  urls?: string[];
  emails?: string[];
  photoUrl?: string;
  address?: OfficialAddress[];
  channels?: Array<{ type: string; id: string }>;
}

interface GoogleOfficeRaw {
  name: string;
  levels?: string[];
  roles?: string[];
  officialIndices: number[];
  divisionId: string;
}

export interface GoogleCivicResponse {
  offices: GoogleOfficeRaw[];
  officials: GoogleOfficialRaw[];
  normalizedInput?: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
}

function deriveContactUrl(urls: string[]): string | null {
  const contact = urls.find(
    (u) =>
      u.toLowerCase().includes("contact") || u.toLowerCase().includes("email")
  );
  return contact ?? (urls.length > 0 ? urls[0] : null);
}

function extractState(divisionId: string): string | null {
  const match = divisionId.match(/state:([a-z]{2})/i);
  return match ? match[1].toUpperCase() : null;
}

function extractDistrict(divisionId: string): string | null {
  const match = divisionId.match(/cd:(\d+)/);
  return match ? match[1] : null;
}

function normalizeOne(raw: GoogleOfficialRaw, office: GoogleOfficeRaw): Official {
  const urls = raw.urls ?? [];
  return {
    name: raw.name,
    office: office.name,
    party: raw.party ?? null,
    state: extractState(office.divisionId),
    district: extractDistrict(office.divisionId),
    phones: raw.phones ?? [],
    urls,
    emails: raw.emails ?? [],
    photoUrl: raw.photoUrl ?? null,
    contactUrl: deriveContactUrl(urls),
    address: raw.address?.[0] ?? null,
  };
}

export function normalizeOfficials(data: GoogleCivicResponse): OfficialsResult {
  const senators: Official[] = [];
  let representative: Official | null = null;

  for (const office of data.offices) {
    const levels = office.levels ?? [];
    const roles = office.roles ?? [];

    if (!levels.includes("country")) continue;

    if (roles.includes("legislatorUpperBody")) {
      for (const idx of office.officialIndices) {
        const raw = data.officials[idx];
        if (raw) senators.push(normalizeOne(raw, office));
      }
    } else if (roles.includes("legislatorLowerBody")) {
      const raw = data.officials[office.officialIndices[0]];
      if (raw) representative = normalizeOne(raw, office);
    }
  }

  return { senators, representative };
}
