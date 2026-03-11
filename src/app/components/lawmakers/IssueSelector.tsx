import { messageTemplates, issueOrder } from "../../data/messageTemplates";
import type { IssueSlug } from "../../types/lawmakers";

interface Props {
  selected: IssueSlug | null;
  onSelect: (slug: IssueSlug) => void;
}

export function IssueSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">
        Select an Issue
      </h3>
      <div className="flex flex-wrap gap-2">
        {issueOrder.map((slug) => {
          const isSelected = selected === slug;
          return (
            <button
              key={slug}
              onClick={() => onSelect(slug)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                isSelected
                  ? "bg-[#C9A227] border-[#C9A227] text-[#0B1F3A]"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#C9A227] hover:text-[#0B1F3A]"
              }`}
            >
              {messageTemplates[slug].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
