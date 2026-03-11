import { Phone, Globe, Mail, ExternalLink, User } from "lucide-react";
import type { Official } from "../../types/lawmakers";

interface Props {
  official: Official;
}

const PARTY_STYLES: Record<string, string> = {
  Democratic: "bg-blue-100 text-blue-800",
  Republican: "bg-red-100 text-red-800",
  Independent: "bg-gray-100 text-gray-700",
};

const MILITARY_COMMITTEES = new Set([
  "Armed Services",
  "Veterans' Affairs",
  "Appropriations",
  "Intelligence",
  "Homeland Security",
  "Foreign Relations",
  "Foreign Affairs",
  "Homeland Security and Governmental Affairs",
]);

function isMilitaryRelevant(committee: string): boolean {
  return [...MILITARY_COMMITTEES].some((k) =>
    committee.toLowerCase().includes(k.toLowerCase())
  );
}

function partyStyle(party: string | null): string {
  if (!party) return "bg-gray-100 text-gray-700";
  for (const [key, cls] of Object.entries(PARTY_STYLES)) {
    if (party.toLowerCase().includes(key.toLowerCase())) return cls;
  }
  return "bg-gray-100 text-gray-700";
}

export function OfficialCard({ official }: Props) {
  const primaryPhone = official.phones[0] ?? null;
  const primaryUrl = official.urls[0] ?? null;
  const primaryEmail = official.emails[0] ?? null;

  const subtitle = [
    official.district ? `District ${official.district}` : null,
    official.state,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
      {/* Card header */}
      <div className="bg-[#0B1F3A] px-6 py-5 flex items-center gap-4">
        {official.photoUrl ? (
          <img
            src={official.photoUrl}
            alt={official.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#C9A227] flex-shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              (e.currentTarget.nextElementSibling as HTMLElement | null)?.style.setProperty(
                "display",
                "flex"
              );
            }}
          />
        ) : null}
        {/* Fallback avatar */}
        <div
          className="w-16 h-16 rounded-full bg-[#1a3352] border-2 border-[#C9A227] flex-shrink-0 items-center justify-center"
          style={{ display: official.photoUrl ? "none" : "flex" }}
        >
          <User size={28} className="text-gray-400" />
        </div>

        <div className="min-w-0">
          <h3 className="text-white font-bold text-lg leading-tight truncate">
            {official.name}
          </h3>
          <p className="text-gray-300 text-sm mt-0.5 leading-snug">{official.office}</p>
          {subtitle && (
            <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-4 flex-1 flex flex-col gap-4">
        {official.party && (
          <span
            className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full ${partyStyle(official.party)}`}
          >
            {official.party}
          </span>
        )}

        {/* Committees */}
        {official.committees.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Committees
            </p>
            <ul className="space-y-1">
              {official.committees.map((c) => {
                const highlight = isMilitaryRelevant(c);
                return (
                  <li key={c} className={`text-xs flex items-start gap-1.5 ${highlight ? "text-[#0B1F3A] font-semibold" : "text-gray-500"}`}>
                    <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${highlight ? "bg-[#C9A227]" : "bg-gray-300"}`} />
                    {c}
                    {highlight && <span className="ml-1 text-[#C9A227]">★</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#0B1F3A] text-white rounded-lg text-sm font-medium hover:bg-[#1a3352] transition-colors"
            >
              <Globe size={15} />
              Visit Website
              <ExternalLink size={12} className="ml-auto opacity-60" />
            </a>
          )}

          {official.contactUrl && official.contactUrl !== primaryUrl ? (
            <a
              href={official.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border-2 border-[#0B1F3A] text-[#0B1F3A] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail size={15} />
              Contact Office
              <ExternalLink size={12} className="ml-auto opacity-60" />
            </a>
          ) : (
            primaryUrl && (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border-2 border-[#0B1F3A] text-[#0B1F3A] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Globe size={15} />
                Visit Official Website
                <ExternalLink size={12} className="ml-auto opacity-60" />
              </a>
            )
          )}

          {primaryPhone && (
            <a
              href={`tel:${primaryPhone.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Phone size={15} className="text-[#C9A227]" />
              {primaryPhone}
            </a>
          )}

          {primaryEmail && (
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail size={15} className="text-[#C9A227]" />
              Email Office
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
