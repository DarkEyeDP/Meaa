import { useState } from "react";
import { MapPin, AlertCircle, Search, UserX } from "lucide-react";
import type {
  AddressFormValues,
  LookupResult,
  LookupState,
  IssueSlug,
  Official,
} from "../types/lawmakers";
import { lookupLawmakers } from "../utils/civicApi";
import { AddressForm } from "../components/lawmakers/AddressForm";
import { OfficialCard } from "../components/lawmakers/OfficialCard";
import { IssueSelector } from "../components/lawmakers/IssueSelector";
import { MessageTemplatePanel } from "../components/lawmakers/MessageTemplatePanel";

// Analytics hooks — wire these to GA4, Segment, or your analytics platform
function trackEvent(name: string, data?: Record<string, string>) {
  void name;
  void data;
}

export function FindYourLawmakers() {
  const [lookupState, setLookupState] = useState<LookupState>("idle");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedIssue, setSelectedIssue] = useState<IssueSlug | null>(null);
  const [userName, setUserName] = useState("");
  const [userState, setUserState] = useState("");

  const handleSubmit = async (values: AddressFormValues) => {
    setLookupState("loading");
    setResult(null);
    setSelectedIssue(null);
    setUserState(values.state);
    trackEvent("lawmakers_lookup_submitted");

    try {
      const data = await lookupLawmakers(values);
      if (data.success) {
        setResult(data);
        setLookupState("success");
        trackEvent("lawmakers_lookup_succeeded");
      } else {
        setResult(data);
        setLookupState("no-results");
        trackEvent("lawmakers_lookup_failed", { reason: "no_results" });
      }
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
      setLookupState("error");
      trackEvent("lawmakers_lookup_failed", { reason: "api_error" });
    }
  };

  const handleIssueSelect = (slug: IssueSlug) => {
    setSelectedIssue(slug);
    trackEvent("issue_selected", { issue: slug });
  };

  const allOfficials: Official[] = result
    ? [...result.officials.senators, ...result.officials.representatives]
    : [];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <MapPin className="text-[#0B1F3A]" size={24} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Lawmakers
              </h1>
              <p className="text-xl text-gray-200">
                Enter your home address to find the members of Congress who
                represent you — then take action on issues that matter to
                enlisted service members.
              </p>
              <p className="text-sm text-gray-400 mt-3">
                Use your home address for the most accurate results. We do not
                store your address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address Form */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 flex items-center gap-2">
            <Search size={22} className="text-[#C9A227]" />
            Look Up Your Representatives
          </h2>

          <AddressForm
            onSubmit={handleSubmit}
            isLoading={lookupState === "loading"}
          />

          {/* Optional: name field for template personalization */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name{" "}
              <span className="text-gray-400 font-normal">(optional — for message personalization)</span>
            </label>
            <input
              type="text"
              placeholder="Sgt. Maria Rodriguez"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full sm:w-72 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white"
            />
          </div>
        </div>
      </section>

      {/* Loading */}
      {lookupState === "loading" && (
        <section className="py-16 text-center">
          <div className="max-w-md mx-auto px-4">
            <div className="w-12 h-12 border-4 border-[#C9A227] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-medium">
              Looking up your representatives…
            </p>
          </div>
        </section>
      )}

      {/* Error */}
      {lookupState === "error" && (
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex gap-4">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={22} />
              <div>
                <h3 className="font-semibold text-red-800 mb-1">
                  {errorMessage === "ADDRESS_NOT_FOUND"
                    ? "Address Not Recognized"
                    : "Lookup Failed"}
                </h3>
                {errorMessage === "ADDRESS_NOT_FOUND" ? (
                  <ul className="text-sm text-red-600 mt-1 space-y-1 list-disc list-inside">
                    <li>Make sure the street number and name are spelled correctly</li>
                    <li>Try abbreviating the street type (St, Ave, Blvd, Dr, Ln)</li>
                    <li>Double-check the ZIP code matches the city and state</li>
                  </ul>
                ) : (
                  <p className="text-sm text-red-700">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No results */}
      {lookupState === "no-results" && (
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserX className="text-gray-400" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
              No Representatives Found
            </h3>
            <p className="text-gray-600">
              We couldn't find federal representatives for that address. Please
              double-check the address and try again.
            </p>
          </div>
        </section>
      )}

      {/* Results */}
      {lookupState === "success" && result && (
        <>
          {/* Officials cards */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                  Your Members of Congress
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Based on address:{" "}
                  <span className="font-medium text-gray-700">
                    {result.inputAddress}
                  </span>
                </p>
              </div>

              {result.officials.representatives.length === 0 && (
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                  Showing your two U.S. Senators.{" "}
                  <a
                    href="https://www.house.gov/representatives/find-your-representative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    Find your congressional district
                  </a>{" "}
                  and enter it in the form above to also see your House Representative.
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {result.officials.senators.map((senator) => (
                  <OfficialCard key={senator.name} official={senator} />
                ))}
                {result.officials.representatives.map((rep) => (
                  <OfficialCard key={rep.name} official={rep} />
                ))}
              </div>
            </div>
          </section>

          {/* Take Action section */}
          <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0B1F3A] mb-1">
                  Take Action on an Issue
                </h2>
                <p className="text-gray-600 text-sm">
                  Select an issue to generate a personalized advocacy message you can
                  copy and paste into your lawmaker's contact form.
                </p>
              </div>

              <IssueSelector
                selected={selectedIssue}
                onSelect={handleIssueSelect}
              />

              {selectedIssue && (
                <MessageTemplatePanel
                  selectedIssue={selectedIssue}
                  officials={allOfficials}
                  userName={userName}
                  userState={userState}
                  onCopied={(issue) =>
                    trackEvent("message_copied", { issue })
                  }
                  onContactOpened={(office) =>
                    trackEvent("contact_link_opened", { office })
                  }
                />
              )}

              {!selectedIssue && (
                <div className="mt-6 p-8 bg-white rounded-xl border-2 border-dashed border-gray-200 text-center">
                  <p className="text-gray-400 text-sm">
                    Select an issue above to generate your message template.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Reminder */}
          <section className="py-8 bg-[#0B1F3A]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-300 text-sm">
                <strong className="text-[#C9A227]">How it works:</strong> Copy
                your message, open your lawmaker's contact page, and paste it
                into their webform. Personalize it with your own story for
                greater impact. Phone calls are also highly effective — even a
                brief call counts.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
