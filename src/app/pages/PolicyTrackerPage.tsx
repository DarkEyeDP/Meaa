import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Filter, Search } from "lucide-react";
import { Link } from "react-router";

interface Bill {
  billNumber: string;
  title: string;
  category: string;
  sponsor: string;
  status: "Introduced" | "In Committee" | "Passed House" | "Passed Senate" | "Enacted" | "Stalled";
  lastActionDate: string;
  summary: string;
  whyItMatters: string;
  meaaPosition: "Support" | "Oppose" | "Monitor";
  officialLink: string;
}

export function PolicyTrackerPage() {
  const [expandedBill, setExpandedBill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Categories",
    "Military Pay",
    "Housing",
    "Healthcare",
    "Family Programs",
    "Transition Services",
    "Education Benefits",
  ];

  const bills: Bill[] = [
    {
      billNumber: "H.R. 1234",
      title: "Military Pay Raise Act of 2026",
      category: "Military Pay",
      sponsor: "Rep. Johnson (D-CA)",
      status: "Passed House",
      lastActionDate: "2026-03-10",
      summary: "Provides a 5.2% pay raise for all military personnel in FY 2027, with an additional 2% increase for E-1 through E-5 pay grades to address cost of living challenges for junior enlisted members.",
      whyItMatters: "Junior enlisted families are disproportionately affected by inflation. This bill would provide meaningful relief for E-1 to E-5 personnel struggling with basic expenses.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/house-bill/1234",
    },
    {
      billNumber: "S. 567",
      title: "Military Family Childcare Expansion Act",
      category: "Family Programs",
      sponsor: "Sen. Martinez (R-TX)",
      status: "In Committee",
      lastActionDate: "2026-03-08",
      summary: "Authorizes $500 million to expand on-base childcare capacity by 25% over three years and establishes subsidies for off-base childcare in underserved areas.",
      whyItMatters: "Enlisted families often face year-long waitlists for on-base childcare, forcing spouses to leave jobs. This bill addresses a critical quality of life issue.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/senate-bill/567",
    },
    {
      billNumber: "H.R. 2890",
      title: "BAH Reform and Transparency Act",
      category: "Housing",
      sponsor: "Rep. Thompson (D-NY)",
      status: "Passed House",
      lastActionDate: "2026-03-05",
      summary: "Reforms Basic Allowance for Housing (BAH) calculation methodology to better reflect actual rental costs and requires annual review of rates in high-cost areas.",
      whyItMatters: "Current BAH rates lag behind actual housing costs in many duty stations, forcing enlisted families to pay out-of-pocket for housing. This reform ensures more accurate compensation.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/house-bill/2890",
    },
    {
      billNumber: "S. 891",
      title: "TRICARE Provider Network Enhancement Act",
      category: "Healthcare",
      sponsor: "Sen. Williams (R-FL)",
      status: "Passed Senate",
      lastActionDate: "2026-03-01",
      summary: "Increases reimbursement rates for TRICARE providers and requires DoD to expand provider networks in rural and underserved areas.",
      whyItMatters: "Many military families, especially in rural duty stations, struggle to find TRICARE providers. This bill improves access to quality healthcare.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/senate-bill/891",
    },
    {
      billNumber: "H.R. 3456",
      title: "Enlisted Transition Assistance Program Reform Act",
      category: "Transition Services",
      sponsor: "Rep. Davis (D-IL)",
      status: "In Committee",
      lastActionDate: "2026-02-28",
      summary: "Expands TAP program requirements, provides additional career counseling resources, and establishes partnerships with civilian employers for enlisted members.",
      whyItMatters: "Enlisted members often face challenges translating military experience to civilian careers. Enhanced TAP support ensures smoother transitions.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/house-bill/3456",
    },
    {
      billNumber: "S. 1122",
      title: "GI Bill Enhancement and Expansion Act",
      category: "Education Benefits",
      sponsor: "Sen. Brown (D-OH)",
      status: "Introduced",
      lastActionDate: "2026-02-25",
      summary: "Extends GI Bill benefits to include vocational training, apprenticeships, and certification programs. Increases monthly housing allowances for student veterans.",
      whyItMatters: "Not all enlisted members pursue traditional four-year degrees. This bill ensures GI Bill benefits support diverse career paths including skilled trades.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/senate-bill/1122",
    },
    {
      billNumber: "H.R. 4567",
      title: "Military Housing Privatization Oversight Act",
      category: "Housing",
      sponsor: "Rep. Garcia (D-CA)",
      status: "In Committee",
      lastActionDate: "2026-02-20",
      summary: "Establishes stricter oversight of privatized military housing, requires quarterly inspections, and creates an independent tenant advocacy office.",
      whyItMatters: "Privatized housing has faced quality and maintenance issues affecting enlisted families. This bill ensures accountability and protects service members' rights.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/house-bill/4567",
    },
    {
      billNumber: "S. 2234",
      title: "Military Spouse Employment Support Act",
      category: "Family Programs",
      sponsor: "Sen. Collins (R-ME)",
      status: "Passed Senate",
      lastActionDate: "2026-02-15",
      summary: "Creates federal tax credits for employers hiring military spouses and establishes portable professional licensing agreements across all states.",
      whyItMatters: "Military spouses face significant employment challenges due to frequent relocations. This bill removes barriers and provides economic stability for families.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/senate-bill/2234",
    },
    {
      billNumber: "H.R. 5678",
      title: "TRICARE Cost Sharing Increase Act",
      category: "Healthcare",
      sponsor: "Rep. Wilson (R-SC)",
      status: "Stalled",
      lastActionDate: "2026-02-10",
      summary: "Proposes increases to TRICARE enrollment fees and copayments to offset rising healthcare costs.",
      whyItMatters: "This bill would significantly increase out-of-pocket healthcare costs for enlisted families, many of whom are already on tight budgets.",
      meaaPosition: "Oppose",
      officialLink: "https://congress.gov/bill/117th-congress/house-bill/5678",
    },
    {
      billNumber: "S. 3001",
      title: "Junior Enlisted Financial Literacy Program Act",
      category: "Military Pay",
      sponsor: "Sen. Reed (D-RI)",
      status: "Introduced",
      lastActionDate: "2026-02-05",
      summary: "Mandates financial literacy training for all E-1 through E-4 personnel and establishes financial counseling services on all military installations.",
      whyItMatters: "Financial stress is a leading quality of life issue for junior enlisted. Structured financial education can help service members build long-term stability.",
      meaaPosition: "Support",
      officialLink: "https://congress.gov/bill/117th-congress/senate-bill/3001",
    },
  ];

  const getStatusColor = (status: Bill["status"]) => {
    switch (status) {
      case "Enacted":
        return "bg-green-100 text-green-800 border-green-300";
      case "Passed Senate":
      case "Passed House":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "In Committee":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Introduced":
        return "bg-gray-100 text-gray-800 border-gray-300";
      case "Stalled":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getPositionColor = (position: Bill["meaaPosition"]) => {
    switch (position) {
      case "Support":
        return "bg-[#C9A227] text-[#0B1F3A]";
      case "Oppose":
        return "bg-red-600 text-white";
      case "Monitor":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Military Pay": "bg-emerald-100 text-emerald-800",
      "Housing": "bg-amber-100 text-amber-800",
      "Healthcare": "bg-rose-100 text-rose-800",
      "Family Programs": "bg-purple-100 text-purple-800",
      "Transition Services": "bg-cyan-100 text-cyan-800",
      "Education Benefits": "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const filteredBills = bills.filter((bill) => {
    const matchesCategory = selectedCategory === "All Categories" || bill.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      bill.billNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bill.sponsor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (billNumber: string) => {
    setExpandedBill(expandedBill === billNumber ? null : billNumber);
  };

  const renderTableRows = () => {
    const rows: JSX.Element[] = [];
    filteredBills.forEach((bill) => {
      // Main row
      rows.push(
        <tr
          key={bill.billNumber}
          className="hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => toggleExpanded(bill.billNumber)}
        >
          <td className="px-6 py-4">
            <span className="font-semibold text-[#0B1F3A]">{bill.billNumber}</span>
          </td>
          <td className="px-6 py-4">
            <span className="text-gray-900">{bill.title}</span>
          </td>
          <td className="px-6 py-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getCategoryColor(bill.category)}`}>
              {bill.category}
            </span>
          </td>
          <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{bill.sponsor}</td>
          <td className="px-6 py-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getStatusColor(bill.status)}`}>
              {bill.status}
            </span>
          </td>
          <td className="px-6 py-4 text-gray-700">
            {new Date(bill.lastActionDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </td>
          <td className="px-6 py-4 text-center">
            {expandedBill === bill.billNumber ? (
              <ChevronUp className="inline text-[#C9A227]" size={20} />
            ) : (
              <ChevronDown className="inline text-gray-400" size={20} />
            )}
          </td>
        </tr>
      );

      // Expanded row
      if (expandedBill === bill.billNumber) {
        rows.push(
          <tr key={`${bill.billNumber}-expanded`}>
            <td colSpan={7} className="px-6 py-6 bg-gray-50">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0B1F3A] mb-2">Summary</h4>
                  <p className="text-gray-700">{bill.summary}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1F3A] mb-2">Why It Matters to Enlisted Members</h4>
                  <p className="text-gray-700">{bill.whyItMatters}</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-semibold text-[#0B1F3A] mb-2">MEAA Position</h4>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getPositionColor(bill.meaaPosition)}`}>
                      {bill.meaaPosition}
                    </span>
                  </div>
                  <a
                    href={bill.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0B1F3A] text-white px-6 py-2 rounded font-semibold hover:bg-[#1a3352] transition-colors"
                  >
                    View Official Bill
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </td>
          </tr>
        );
      }
    });
    return rows;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Policy Tracker</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Follow legislation impacting enlisted service members and their families.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-gray-50 py-6 sticky top-20 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search bills by number, title, or sponsor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A227]"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A227] appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#0B1F3A]">{bills.length}</div>
              <div className="text-sm text-gray-600">Total Bills</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-800">
                {bills.filter((b) => b.status === "Enacted").length}
              </div>
              <div className="text-sm text-gray-600">Enacted</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-800">
                {bills.filter((b) => b.status === "Passed House" || b.status === "Passed Senate").length}
              </div>
              <div className="text-sm text-gray-600">Passed Chamber</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-800">
                {bills.filter((b) => b.status === "In Committee").length}
              </div>
              <div className="text-sm text-gray-600">In Committee</div>
            </div>
            <div className="bg-[#C9A227]/10 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#C9A227]">
                {bills.filter((b) => b.meaaPosition === "Support").length}
              </div>
              <div className="text-sm text-gray-600">MEAA Supports</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legislation Table/Cards */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBills.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No bills match your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table View */}
              <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#0B1F3A] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Bill Number</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Sponsor</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Last Action</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {renderTableRows()}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {filteredBills.map((bill) => (
                  <div key={bill.billNumber} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div
                      className="p-4 cursor-pointer"
                      onClick={() => toggleExpanded(bill.billNumber)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="font-bold text-[#0B1F3A]">{bill.billNumber}</span>
                          <h3 className="text-gray-900 font-semibold mt-1">{bill.title}</h3>
                        </div>
                        {expandedBill === bill.billNumber ? (
                          <ChevronUp className="text-[#C9A227] flex-shrink-0 ml-2" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0 ml-2" size={24} />
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(bill.category)}`}>
                          {bill.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(bill.status)}`}>
                          {bill.status}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 space-y-1">
                        <p><span className="font-semibold">Sponsor:</span> {bill.sponsor}</p>
                        <p>
                          <span className="font-semibold">Last Action:</span>{" "}
                          {new Date(bill.lastActionDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {expandedBill === bill.billNumber && (
                      <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-[#0B1F3A] mb-2">Summary</h4>
                            <p className="text-gray-700 text-sm">{bill.summary}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0B1F3A] mb-2">Why It Matters</h4>
                            <p className="text-gray-700 text-sm">{bill.whyItMatters}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0B1F3A] mb-2">MEAA Position</h4>
                            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getPositionColor(bill.meaaPosition)}`}>
                              {bill.meaaPosition}
                            </span>
                          </div>
                          <a
                            href={bill.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#0B1F3A] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a3352] transition-colors"
                          >
                            View Official Bill
                            <ExternalLink className="ml-2" size={16} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">Status Legend</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor("Enacted")}`}>
                Enacted
              </span>
              <span className="text-sm text-gray-600">Signed into law</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor("Passed House")}`}>
                Passed Chamber
              </span>
              <span className="text-sm text-gray-600">Passed House or Senate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor("In Committee")}`}>
                In Committee
              </span>
              <span className="text-sm text-gray-600">Under committee review</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor("Introduced")}`}>
                Introduced
              </span>
              <span className="text-sm text-gray-600">Recently introduced</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor("Stalled")}`}>
                Stalled
              </span>
              <span className="text-sm text-gray-600">No recent action</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Join the Association
          </h2>
          <p className="text-xl text-[#0B1F3A] mb-8">
            Your membership strengthens our voice in Washington. Together, we ensure enlisted service members have the representation they deserve.
          </p>
          <Link
            to="/membership"
            className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#1a3352] transition-colors"
          >
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
}