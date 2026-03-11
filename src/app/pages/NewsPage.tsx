import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";

export function NewsPage() {
  const articles = [
    {
      category: "Legislative Updates",
      title: "MEAA Testifies Before Senate Armed Services Committee on Enlisted Pay",
      date: "March 8, 2026",
      excerpt: "Our Executive Director provided testimony on the need for a 5.2% enlisted pay raise in the FY 2027 NDAA, citing inflation impacts on junior enlisted families.",
      image: "https://images.unsplash.com/photo-1673121209001-e996ecf40807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBpdG9sJTIwYnVpbGRpbmclMjB3YXNoaW5ndG9uJTIwZGN8ZW58MXx8fHwxNzczMTg0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      category: "Military Pay",
      title: "New Analysis Shows Junior Enlisted Families Struggling with Cost of Living",
      date: "March 5, 2026",
      excerpt: "MEAA research finds that 40% of E-1 to E-4 families are food insecure in high-cost duty stations, prompting calls for BAH reform.",
      image: "https://images.unsplash.com/photo-1615980215756-4d6069d4e872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWlsaXRhcnklMjBzZXJ2aWNlJTIwbWVtYmVycyUyMGVubGlzdGVkfGVufDF8fHx8MTc3MzE4NDM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      category: "Housing",
      title: "DoD Announces New On-Base Housing Quality Standards",
      date: "March 1, 2026",
      excerpt: "Following advocacy from MEAA and other organizations, the Pentagon announced stricter oversight of privatized military housing.",
      image: "https://images.unsplash.com/photo-1758575514459-8a9b37d68047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGZhbWlseSUyMHJldW5pb258ZW58MXx8fHwxNzczMTg0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      category: "Healthcare",
      title: "TRICARE Provider Network Expansion Approved",
      date: "February 28, 2026",
      excerpt: "New contract will add 15,000 providers to TRICARE network, improving access for military families in underserved areas.",
      image: "https://images.unsplash.com/photo-1646342029622-12f25838181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHZldGVyYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMxODQzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      category: "Transition Support",
      title: "VA Announces Streamlined Benefits Claims Process for Enlisted Veterans",
      date: "February 25, 2026",
      excerpt: "New digital system reduces average processing time from 125 days to 60 days for disability claims.",
      image: "https://images.unsplash.com/photo-1590423410437-89734ae8a17d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzMxODQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      category: "Legislative Updates",
      title: "Military Family Childcare Act Passes Senate Committee",
      date: "February 20, 2026",
      excerpt: "Bipartisan legislation to expand on-base childcare capacity moves closer to full Senate vote.",
      image: "https://images.unsplash.com/photo-1767211808559-3384c1f85a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHRyYWluaW5nJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzczMTg0MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = [
    "All News",
    "Legislative Updates",
    "Military Pay",
    "Housing",
    "Healthcare",
    "Transition Support",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Insights</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Stay informed on policy developments, legislative updates, and issues affecting enlisted service members and their families.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-6 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  index === 0
                    ? "bg-[#C9A227] text-[#0B1F3A]"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#C9A227] hover:text-[#C9A227]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-full">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#C9A227] text-[#0B1F3A] px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {articles[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {articles[0].excerpt}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center text-[#C9A227] text-sm font-semibold">
                      <Tag size={14} className="mr-1" />
                      {article.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for weekly policy updates, legislative alerts, and insights on issues affecting enlisted service members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227]"
            />
            <button className="bg-[#C9A227] text-[#0B1F3A] px-8 py-3 rounded font-semibold hover:bg-[#b39020] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
