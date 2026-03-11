import { useState } from "react";
import { Copy, Check, Phone, ExternalLink, Mail } from "lucide-react";
import type { IssueSlug, Official } from "../../types/lawmakers";
import { messageTemplates } from "../../data/messageTemplates";
import { renderTemplate } from "../../utils/renderTemplate";

interface Props {
  selectedIssue: IssueSlug;
  officials: Official[];
  userName: string;
  userState: string;
  onCopied?: (issue: IssueSlug) => void;
  onContactOpened?: (officeName: string) => void;
}

export function MessageTemplatePanel({
  selectedIssue,
  officials,
  userName,
  userState,
  onCopied,
  onContactOpened,
}: Props) {
  const [copied, setCopied] = useState(false);

  const template = messageTemplates[selectedIssue];

  const copyMessage = async (recipientName: string) => {
    const body = renderTemplate(template.body, { recipientName, userName, userState });
    await navigator.clipboard.writeText(body);
    setCopied(true);
    onCopied?.(selectedIssue);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyGeneric = async () => {
    const body = renderTemplate(template.body, { userName, userState });
    await navigator.clipboard.writeText(body);
    setCopied(true);
    onCopied?.(selectedIssue);
    setTimeout(() => setCopied(false), 2500);
  };

  // Preview rendered with generic placeholders
  const previewBody = renderTemplate(template.body, { userName, userState });

  return (
    <div className="mt-6 space-y-6">
      {/* Message preview */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Subject
            </p>
            <p className="text-sm font-semibold text-[#0B1F3A] mt-0.5">
              {template.subject}
            </p>
          </div>
          <button
            onClick={copyGeneric}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              copied
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-[#C9A227] text-[#0B1F3A] hover:bg-[#b39020]"
            }`}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied!" : "Copy Message"}
          </button>
        </div>
        <textarea
          readOnly
          value={previewBody}
          rows={12}
          className="w-full px-5 py-4 text-sm text-gray-700 leading-relaxed font-mono resize-none focus:outline-none bg-white"
        />
      </div>

      {/* Per-official actions */}
      <div>
        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
          Send to Your Lawmakers
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {officials.map((official) => {
            const primaryPhone = official.phones[0] ?? null;
            const primaryEmail = official.emails[0] ?? null;
            const contactTarget = official.contactUrl ?? official.urls[0] ?? null;

            const mailtoBody = renderTemplate(template.body, {
              recipientName: official.name,
              userName,
              userState,
            });

            return (
              <div
                key={official.name}
                className="bg-white rounded-lg border border-gray-200 p-4 space-y-3"
              >
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-sm leading-tight">
                    {official.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{official.office}</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => copyMessage(official.name)}
                    className="flex items-center gap-2 w-full px-3 py-2 bg-[#C9A227] text-[#0B1F3A] rounded-lg text-xs font-semibold hover:bg-[#b39020] transition-colors"
                  >
                    <Copy size={13} />
                    Copy Message for {official.name.split(" ").pop()}
                  </button>

                  {contactTarget && (
                    <a
                      href={contactTarget}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onContactOpened?.(official.office)}
                      className="flex items-center gap-2 w-full px-3 py-2 bg-[#0B1F3A] text-white rounded-lg text-xs font-semibold hover:bg-[#1a3352] transition-colors"
                    >
                      <ExternalLink size={13} />
                      Open Contact Page
                    </a>
                  )}

                  {primaryEmail && (
                    <a
                      href={`mailto:${primaryEmail}?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(mailtoBody)}`}
                      className="flex items-center gap-2 w-full px-3 py-2 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Mail size={13} />
                      Email Office
                    </a>
                  )}

                  {primaryPhone && (
                    <a
                      href={`tel:${primaryPhone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2 w-full px-3 py-2 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Phone size={13} className="text-[#C9A227]" />
                      {primaryPhone}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Phone script */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-5">
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
            Phone Call Script
          </p>
          <p className="text-sm text-amber-900 leading-relaxed">
            {renderTemplate(template.phoneScript, {
              recipientName: officials[0]?.name ?? "your representative",
              userName,
              userState,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
