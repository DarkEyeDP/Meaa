import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router";

export function InsightsPage() {
  const featured = {
    category: "Pay & Compensation",
    title: "Why the Military's Pay Gap Is Wider Than DoD Reports",
    author: "Col. (Ret.) Marcus Webb",
    date: "March 6, 2026",
    excerpt:
      "Official comparability studies consistently undercount the true wage gap between enlisted personnel and comparable civilian workers. A closer look at methodology reveals a 12–18% disparity that standard reports obscure.",
    readTime: "8 min read",
  };

  const articles = [
    {
      category: "Housing",
      title: "BAH Reform Is Overdue — Here's What It Should Look Like",
      author: "Danielle Okafor, Policy Analyst",
      date: "March 3, 2026",
      excerpt:
        "Basic Allowance for Housing hasn't kept pace with rental markets in key duty station cities. We outline a data-driven framework for overhauling the calculation methodology.",
      readTime: "6 min read",
    },
    {
      category: "Healthcare",
      title: "TRICARE's Provider Shortage Is a Readiness Problem",
      author: "Dr. Kevin Strand, Health Policy",
      date: "February 27, 2026",
      excerpt:
        "When service members can't access timely mental health care, mission readiness suffers. New data reveals the extent of TRICARE's provider network gaps.",
      readTime: "5 min read",
    },
    {
      category: "Transition",
      title: "The Civilian Credential Gap: Why Skills Don't Always Transfer",
      author: "James Portillo, Senior Fellow",
      date: "February 22, 2026",
      excerpt:
        "Thousands of veterans hold military occupational specialties with direct civilian equivalents, yet licensing barriers block employment. We examine where the system breaks down.",
      readTime: "7 min read",
    },
    {
      category: "Education",
      title: "GI Bill Usage Trends Signal a Shift Toward Vocational Pathways",
      author: "Sarah Kim, Research Director",
      date: "February 17, 2026",
      excerpt:
        "More veterans are choosing trade programs and apprenticeships over four-year degrees. Current GI Bill structures don't reflect this shift — and they should.",
      readTime: "4 min read",
    },
    {
      category: "Pay & Compensation",
      title: "Special Pay Structures Are Outdated and Inequitable",
      author: "Col. (Ret.) Marcus Webb",
      date: "February 10, 2026",
      excerpt:
        "The military's patchwork of special pays, bonuses, and incentives was designed for a different era. Here's how to modernize compensation without ballooning the budget.",
      readTime: "6 min read",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Pay & Compensation": "bg-emerald-100 text-emerald-800",
    Housing: "bg-amber-100 text-amber-800",
    Healthcare: "bg-rose-100 text-rose-800",
    Transition: "bg-cyan-100 text-cyan-800",
    Education: "bg-indigo-100 text-indigo-800",
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Analysis</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Expert commentary unpacking the military policies and legislation that shape enlisted service members' lives.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">Featured Analysis</h2>
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-[#C9A227]">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[featured.category]}`}>
              {featured.category}
            </span>
            <h3 className="text-3xl font-bold text-[#0B1F3A] mb-4">{featured.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><User size={14} /> {featured.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <Link to="#" className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors">
                Read Full Analysis <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">Recent Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit ${categoryColors[article.category] ?? "bg-gray-100 text-gray-800"}`}>
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 flex-1">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link to="#" className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors text-sm">
                  Read More <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Contribute Your Expertise</h2>
          <p className="text-xl text-gray-200 mb-8">
            Are you a policy expert, researcher, or veteran with insights to share? MEAA welcomes guest contributors.
          </p>
          <Link to="/contact" className="inline-block bg-[#C9A227] text-[#0B1F3A] px-8 py-4 rounded font-semibold hover:bg-[#b39020] transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
