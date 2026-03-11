import { Calendar, Download, Mail, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function PressPage() {
  const pressReleases = [
    {
      date: "March 8, 2026",
      title: "MEAA Executive Director Testifies Before Senate Armed Services Committee",
      excerpt:
        "MEAA delivered formal testimony urging a 5.2% enlisted pay raise in the FY 2027 NDAA, citing inflation-driven hardship among junior enlisted families.",
    },
    {
      date: "March 1, 2026",
      title: "MEAA Commends DoD Announcement on Housing Quality Standards",
      excerpt:
        "The organization praised the Pentagon's new oversight framework for privatized military housing, calling it a step forward for enlisted families.",
    },
    {
      date: "February 20, 2026",
      title: "MEAA Endorses Military Family Childcare Act",
      excerpt:
        "MEAA officially endorsed the bipartisan Military Family Childcare Act, which would expand on-base childcare capacity by 25% over three years.",
    },
    {
      date: "February 10, 2026",
      title: "MEAA Opposes TRICARE Cost Sharing Increase Act",
      excerpt:
        "The organization announced formal opposition to H.R. 5678, which would significantly increase out-of-pocket healthcare costs for enlisted families.",
    },
    {
      date: "January 28, 2026",
      title: "MEAA Releases 2026 State of Enlisted Quality of Life Report",
      excerpt:
        "MEAA published its flagship annual report documenting pay adequacy, housing, healthcare access, and family support conditions for enlisted service members.",
    },
    {
      date: "January 15, 2026",
      title: "MEAA Welcomes New Members to Board of Directors",
      excerpt:
        "Three new members with backgrounds in military policy, veterans advocacy, and congressional affairs join MEAA's governing board.",
    },
  ];

  const mediaAssets = [
    { title: "MEAA Logo Package", description: "High-resolution logos in PNG, SVG, and EPS formats", size: "4.2 MB" },
    { title: "Executive Headshots", description: "Official photos of MEAA leadership for media use", size: "12.8 MB" },
    { title: "Organizational Fact Sheet", description: "One-page overview of MEAA's mission, membership, and policy work", size: "0.4 MB" },
    { title: "Brand Guidelines", description: "Usage guidelines for MEAA name, logo, and visual identity", size: "1.1 MB" },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Center</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Media resources, press releases, and official statements from the Military Enlisted Association of America.
          </p>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-10 bg-[#C9A227]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-1">Media Inquiries</h2>
              <p className="text-[#0B1F3A]">For press inquiries, interview requests, and statement requests:</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:press@meaa.org" className="flex items-center gap-2 bg-[#0B1F3A] text-white px-5 py-3 rounded font-semibold hover:bg-[#1a3352] transition-colors">
                <Mail size={18} /> press@meaa.org
              </a>
              <a href="tel:+12025550147" className="flex items-center gap-2 bg-[#0B1F3A] text-white px-5 py-3 rounded font-semibold hover:bg-[#1a3352] transition-colors">
                <Phone size={18} /> (202) 555-0147
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">Press Releases & Statements</h2>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-1 text-sm text-gray-500 whitespace-nowrap md:w-32 flex-shrink-0">
                  <Calendar size={14} />
                  <span>{release.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0B1F3A] mb-2">{release.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{release.excerpt}</p>
                  <Link to="#" className="inline-flex items-center text-[#C9A227] font-semibold text-sm hover:text-[#b39020] transition-colors">
                    Read Full Statement <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Media Kit</h2>
            <button className="flex items-center gap-2 bg-[#0B1F3A] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a3352] transition-colors w-fit">
              <Download size={18} /> Download Full Kit
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-[#0B1F3A] mb-2">{asset.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{asset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{asset.size}</span>
                  <button className="flex items-center gap-1 text-[#C9A227] font-semibold text-sm hover:text-[#b39020] transition-colors">
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">MEAA in the News</h2>
          <p className="text-gray-700 mb-8">
            For a full archive of media coverage featuring MEAA, or to request a spokesperson for your story, please contact our communications team.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#C9A227] text-[#0B1F3A] px-8 py-4 rounded font-semibold hover:bg-[#b39020] transition-colors">
            Contact Communications <ExternalLink className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
