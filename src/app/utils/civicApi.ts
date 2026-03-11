import { normalizeOfficials } from "./normalizeOfficials";
import type { AddressFormValues, LookupResult } from "../types/lawmakers";
import type { GoogleCivicResponse } from "./normalizeOfficials";

const API_KEY = import.meta.env.VITE_GOOGLE_CIVIC_API_KEY as string | undefined;
const BASE_URL = "https://www.googleapis.com/civicinfo/v2/representatives";

export async function lookupLawmakers(form: AddressFormValues): Promise<LookupResult> {
  if (!API_KEY) {
    throw new Error(
      "Google Civic API key is not configured. Add VITE_GOOGLE_CIVIC_API_KEY to your .env file."
    );
  }

  const addressString = `${form.street}, ${form.city}, ${form.state} ${form.zip}`;
  // Fetch all representatives without server-side role filtering.
  // The API returns 404 when level/role filters find no match for an address,
  // even for valid addresses. We filter to federal officials client-side instead.
  const params = new URLSearchParams({
    address: addressString,
    key: API_KEY,
  });

  const response = await fetch(`${BASE_URL}?${params.toString()}`);

  if (response.status === 404) {
    // Address not found or no representatives returned
    return {
      success: false,
      inputAddress: addressString,
      officials: { senators: [], representative: null },
    };
  }

  if (!response.ok) {
    const body = await response.json().catch(() => ({})) as { error?: { message?: string } };
    throw new Error(
      body?.error?.message ?? `Request failed (${response.status}). Please try again.`
    );
  }

  const data = (await response.json()) as GoogleCivicResponse;
  const officials = normalizeOfficials(data);

  const hasResults = officials.senators.length > 0 || officials.representative !== null;

  return {
    success: hasResults,
    inputAddress: addressString,
    officials,
  };
}
