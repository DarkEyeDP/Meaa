import { Download, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ResearchPage() {
  const featuredReport = {
    title: "State of Enlisted Quality of Life: 2026 Annual Report",
    date: "February 2026",
    pages: "84 pages",
    description:
      "MEAA's flagship annual report examines pay adequacy, housing conditions, healthcare access, family support programs, and transition outcomes for enlisted service members across all branches and pay grades.",
    topics: ["Pay & Compensation", "Housing", "Healthcare", "Family Programs", "Transition"],
  };

  const reports = [
    {
      title: "BAH Rate Adequacy Study: High-Cost Duty Stations",
      date: "January 2026",
      pages: "42 pages",
      category: "Housing",
      description:
        "Analyzes the gap between BAH rates and actual rental costs in the 30 highest-cost military duty station markets.",
    },
    {
      title: "TRICARE Mental Health Access: A Network Analysis",
      date: "December 2025",
      pages: "36 pages",
      category: "Healthcare",
      description:
        "Examines TRICARE provider availability for mental health services across geographic regions, with recommendations for network expansion.",
    },
    {
      title: "Enlisted-to-Civilian Wage Comparability Study",
      date: "November 2025",
      pages: "58 pages",
      category: "Pay & Compensation",
      description:
        "A comprehensive comparison of military enlisted compensation to civilian wages for comparable roles, controlling for benefits and non-monetary factors.",
    },
    {
      title: "On-Base Childcare: Capacity, Cost, and Wait Times",
      date: "October 2025",
      pages: "29 pages",
      category: "Family Programs",
      description:
        "Surveys on-base childcare availability at 45 installations, documenting waitlist lengths, cost burdens, and the impact on military spouse employment.",
    },
    {
      title: "Veteran Benefits Claims: Processing Delays and Outcomes",
      date: "September 2025",
      pages: "47 pages",
      category: "Transition",
      description:
        "Tracks VA disability claims from enlisted veterans, identifying systemic delays by branch, rating category, and geographic region.",
    },
    {
      title: "GI Bill Utilization: Trends, Barriers, and Outcomes",
      date: "August 2025",
      pages: "33 pages",
      category: "Education",
      description:
        "Analyzes GI Bill usage patterns among enlisted veterans, with focus on program selection, completion rates, and post-education employment.",
    },
  ];

  const categoryColors: Record<string, string> = {
    Housing: "bg-amber-100 text-amber-800",
    Healthcare: "bg-rose-100 text-rose-800",
    "Pay & Compensation": "bg-emerald-100 text-emerald-800",
    "Family Programs": "bg-purple-100 text-purple-800",
    Transition: "bg-cyan-100 text-cyan-800",
    Education: "bg-indigo-100 text-indigo-800",
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Reports</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Original policy research and data-driven analysis on the issues that matter most to enlisted service members and their families.
          </p>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">Featured Report</h2>
          <div className="bg-[#0B1F3A] text-white rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-[#C9A227]" size={28} />
                  <span className="text-[#C9A227] font-semibold text-sm">Annual Report</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredReport.title}</h3>
                <p className="text-gray-200 text-lg mb-6">{featuredReport.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredReport.topics.map((topic) => (
                    <span key={topic} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {featuredReport.date}</span>
                  <span>{featuredReport.pages}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button className="flex items-center gap-2 bg-[#C9A227] text-[#0B1F3A] px-6 py-3 rounded font-semibold hover:bg-[#b39020] transition-colors whitespace-nowrap">
                  <Download size={18} /> Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">All Reports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit ${categoryColors[report.category] ?? "bg-gray-100 text-gray-800"}`}>
                  {report.category}
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex-1">{report.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {report.date}</span>
                  <span>{report.pages}</span>
                </div>
                <button className="flex items-center gap-2 text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors text-sm">
                  <Download size={14} /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnership */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Research Partnerships</h2>
          <p className="text-lg text-gray-700 mb-8">
            MEAA collaborates with academic institutions, think tanks, and policy organizations to produce independent research on enlisted issues. Interested in partnering?
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#0B1F3A] text-white px-8 py-4 rounded font-semibold hover:bg-[#1a3352] transition-colors">
            Contact Our Research Team <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
