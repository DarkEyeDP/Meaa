import { TrendingUp, Home, Heart, Users, Shield, GraduationCap, FileText, Scale, Building2 } from "lucide-react";
import { Link } from "react-router";

export function PolicyPage() {
  const policyPriorities = [
    {
      icon: TrendingUp,
      title: "Military Pay & Compensation",
      description: "Advocating for fair pay raises that keep pace with inflation and reflect the service and sacrifice of enlisted personnel.",
      actions: [
        "Annual pay raise advocacy tied to Employment Cost Index",
        "Special pay and incentive structure reform",
        "Basic Allowance for Subsistence (BAS) increases",
      ],
    },
    {
      icon: Home,
      title: "Housing & Cost of Living",
      description: "Ensuring affordable housing and adequate support for military families facing rising costs.",
      actions: [
        "BAH rate methodology improvements",
        "On-base housing quality standards",
        "Cost of living adjustments for high-cost duty stations",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Protecting TRICARE benefits and ensuring quality healthcare for enlisted families.",
      actions: [
        "TRICARE provider network expansion",
        "Mental health service accessibility",
        "Prescription drug cost controls",
      ],
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Strengthening resources for military spouses, children, and caregivers.",
      actions: [
        "Childcare availability and affordability",
        "Spouse employment and licensing portability",
        "Family separation support programs",
      ],
    },
    {
      icon: Shield,
      title: "Transition & Veteran Success",
      description: "Supporting enlisted members as they transition to civilian careers.",
      actions: [
        "TAP program improvements",
        "Skills translation and credentialing",
        "VA benefits access and processing",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Benefits",
      description: "Expanding educational opportunities for service members and their families.",
      actions: [
        "GI Bill benefits protection and expansion",
        "Tuition assistance program improvements",
        "Dependent education support",
      ],
    },
  ];

  const legislativeUpdates = [
    {
      title: "FY 2027 National Defense Authorization Act",
      status: "In Committee",
      description: "MEAA submitted testimony supporting a 5.2% enlisted pay raise and housing allowance reform.",
    },
    {
      title: "Military Family Childcare Act",
      status: "Pending",
      description: "Bipartisan legislation to expand on-base childcare capacity by 25% over three years.",
    },
    {
      title: "TRICARE Young Adult Coverage Extension",
      status: "Passed Senate",
      description: "Extends TRICARE coverage for dependent children up to age 27 if enrolled full-time in education.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Policy & Advocacy</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            MEAA engages directly with lawmakers, Department of Defense leadership, and federal agencies to advocate for enlisted interests.
          </p>
        </div>
      </section>

      {/* Current Policy Priorities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Current Policy Priorities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policyPriorities.map((priority, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mb-4">
                  <priority.icon className="text-[#0B1F3A]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{priority.title}</h3>
                <p className="text-gray-700 mb-4">{priority.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#0B1F3A] text-sm">Current Actions:</p>
                  <ul className="space-y-2">
                    {priority.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-[#C9A227] mr-2">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legislative Engagement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8 text-center">
            Legislative Engagement
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 mb-12">
            <p>
              MEAA maintains an active presence on Capitol Hill, working with members of Congress from both parties to advance enlisted interests. Our legislative team tracks bills, submits formal testimony, and provides expert analysis on military policy.
            </p>
            <p>
              We engage with key committees including the House and Senate Armed Services Committees, Veterans' Affairs Committees, and Appropriations subcommittees responsible for military funding.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">Recent Legislative Updates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {legislativeUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <FileText className="text-[#C9A227]" size={24} />
                  <span className={`text-xs font-semibold px-3 py-1 rounded ${
                    update.status === 'Passed Senate' 
                      ? 'bg-green-100 text-green-800'
                      : update.status === 'In Committee'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {update.status}
                  </span>
                </div>
                <h4 className="font-bold text-[#0B1F3A] mb-2">{update.title}</h4>
                <p className="text-gray-700 text-sm">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Congressional Outreach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                Congressional Outreach
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                MEAA conducts direct advocacy with lawmakers and their staff, providing them with research, data, and real stories from enlisted service members.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Scale className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Policy Briefs</h4>
                    <p className="text-gray-700">We provide detailed analysis and recommendations to congressional offices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Member Stories</h4>
                    <p className="text-gray-700">Connecting lawmakers with real enlisted families affected by policy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] mb-1">Committee Testimony</h4>
                    <p className="text-gray-700">Formal testimony before congressional committees on enlisted issues.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1673121209001-e996ecf40807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBpdG9sJTIwYnVpbGRpbmclMjB3YXNoaW5ndG9uJTIwZGN8ZW58MXx8fHwxNzczMTg0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Capitol Building"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research and Reports */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Research & Reports</h2>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-12">
            MEAA produces original research and policy analysis on issues affecting enlisted service members. Our reports inform congressional debates and DoD policy decisions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-xl text-[#C9A227] mb-2">Annual Reports</h3>
              <p className="text-gray-200">Comprehensive analysis of enlisted quality of life issues and policy recommendations.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-xl text-[#C9A227] mb-2">Issue Briefs</h3>
              <p className="text-gray-200">Focused research on specific topics like housing, healthcare, and compensation.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-xl text-[#C9A227] mb-2">Survey Data</h3>
              <p className="text-gray-200">Direct feedback from enlisted members and families on policy priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Tracker CTA */}
      <section className="py-16 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Track Legislation in Real-Time
          </h2>
          <p className="text-xl text-[#0B1F3A] mb-8">
            Use our Policy Tracker to follow bills affecting enlisted service members, see MEAA's positions, and access official legislation.
          </p>
          <Link
            to="/policy-tracker"
            className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#1a3352] transition-colors"
          >
            View Policy Tracker
          </Link>
        </div>
      </section>
    </div>
  );
}