import { Link } from "react-router";
import { Shield, Users, FileText, Heart, GraduationCap, Home, ArrowRight, TrendingUp } from "lucide-react";

export function HomePage() {
  const policyPriorities = [
    {
      icon: TrendingUp,
      title: "Military Pay",
      description: "Ensuring fair compensation for enlisted service members and their families.",
    },
    {
      icon: Home,
      title: "Housing & Cost of Living",
      description: "Advocating for affordable housing and support for military families facing inflation.",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Protecting TRICARE and ensuring quality healthcare for enlisted personnel.",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Strengthening resources for military spouses, children, and caregivers.",
    },
    {
      icon: Shield,
      title: "Transition & Veteran Success",
      description: "Supporting enlisted members as they transition to civilian life.",
    },
    {
      icon: GraduationCap,
      title: "Education Benefits",
      description: "Expanding educational opportunities for service members and their families.",
    },
  ];

  const testimonials = [
    {
      quote: "MEAA gives enlisted voices the representation we've needed for years. Finally, someone is fighting for us in Washington.",
      name: "SSG Maria Rodriguez",
      branch: "U.S. Army",
    },
    {
      quote: "As a Navy petty officer, I've watched officers have a seat at the table for decades. Now enlisted members have MEAA.",
      name: "PO1 James Chen",
      branch: "U.S. Navy",
    },
    {
      quote: "This organization is vital for ensuring our families aren't forgotten when policy decisions are made.",
      name: "SrA Ashley Williams",
      branch: "U.S. Air Force",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://d2cto119c3bgok.cloudfront.net/thumbs/photos/1412/1690454/1000w_q95.jpg"
            alt="Enlisted Service Members"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              America's Enlisted Deserve a Seat at the Table
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              The Military Enlisted Association of America advocates for the millions of enlisted service members and families who defend this nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/membership"
                className="bg-[#C9A227] text-[#0B1F3A] px-8 py-4 rounded text-lg font-semibold hover:bg-[#b39020] transition-colors text-center"
              >
                Join the Movement
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded text-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MEAA Exists */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                Why MEAA Exists
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                For decades, military officers have had powerful advocacy organizations representing their interests in Washington, DC. Organizations like MOAA have successfully shaped policy, protected benefits, and ensured officers have a voice in national defense decisions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                But enlisted service members—who make up over 80% of the military—have lacked equivalent representation at the national policy level.
              </p>
              <p className="text-lg text-gray-700">
                <strong className="text-[#C9A227]">MEAA changes that.</strong> We are the first national organization dedicated exclusively to advocating for enlisted interests on Capitol Hill and in federal policy debates.
              </p>
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

      {/* Our Mission */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-200">
            To advocate for the interests of enlisted military service members and their families at the national policy level, ensuring their voices are heard in Washington, DC. We focus on protecting enlisted pay, benefits, healthcare, housing, transition support, and quality of life.
          </p>
        </div>
      </section>

      {/* Policy Priorities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Policy Priorities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policyPriorities.map((priority, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-[#C9A227] transition-all">
                <priority.icon className="w-12 h-12 text-[#C9A227] mb-4" />
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{priority.title}</h3>
                <p className="text-gray-700">{priority.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/policy"
              className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#b39020] transition-colors"
            >
              View Full Policy Platform
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Advocacy on Capitol Hill */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1590423410437-89734ae8a17d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjBtaWxpdGFyeXxlbnwxfHx8fDE3NzMxODQzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="American Flag"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
                Advocacy on Capitol Hill
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                MEAA maintains a presence in Washington, DC, working directly with members of Congress, Senate Armed Services Committee staff, and Department of Defense leadership.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We provide testimony, research, and policy recommendations on issues affecting enlisted service members. Our team tracks legislation, submits formal comments on proposed regulations, and ensures enlisted perspectives are included in national defense policy debates.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <FileText className="text-[#C9A227] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Congressional testimony and policy briefs</span>
                </li>
                <li className="flex items-start">
                  <FileText className="text-[#C9A227] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Direct engagement with lawmakers and staff</span>
                </li>
                <li className="flex items-start">
                  <FileText className="text-[#C9A227] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Research and analysis on enlisted quality of life issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Represent */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Who We Represent
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#C9A227] mb-2">1.1M+</div>
              <p className="text-xl">Active Duty Enlisted</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#C9A227] mb-2">800K+</div>
              <p className="text-xl">Reserve & Guard Enlisted</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#C9A227] mb-2">3M+</div>
              <p className="text-xl">Family Members</p>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-8 text-lg">
            Representing all branches: Army, Marine Corps, Navy, Air Force, Space Force, and Coast Guard
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Voices of the Enlisted
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#0B1F3A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Association CTA */}
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
