export interface AddressFormValues {
  street: string;
  city: string;
  state: string;
  zip: string;
  district: string; // congressional district number; empty string = senators only
}

export interface OfficialAddress {
  line1?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface Official {
  name: string;
  office: string;
  party: string | null;
  state: string | null;
  district: string | null;
  phones: string[];
  urls: string[];
  emails: string[];
  photoUrl: string | null;
  contactUrl: string | null;
  address: OfficialAddress | null;
  committees: string[];
}

export interface OfficialsResult {
  senators: Official[];
  representatives: Official[];
}

export interface LookupResult {
  success: boolean;
  inputAddress: string;
  officials: OfficialsResult;
}

export type IssueSlug =
  | "military-pay"
  | "housing-bah"
  | "healthcare"
  | "family-support"
  | "transition-success";

export interface IssueTemplate {
  label: string;
  subject: string;
  body: string;
  phoneScript: string;
}

export type LookupState = "idle" | "loading" | "success" | "error" | "no-results";
