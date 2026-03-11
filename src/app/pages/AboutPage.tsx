import { Target, Users, Flag, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export function AboutPage() {
  const leadershipTeam = [
    {
      name: "John Mitchell",
      title: "Executive Director",
      bio: "Former Army NCO with 20 years of service. Veteran policy advocate.",
    },
    {
      name: "Sarah Thompson",
      title: "Director of Policy",
      bio: "15 years experience in congressional affairs and military policy.",
    },
    {
      name: "Michael Rodriguez",
      title: "Director of Advocacy",
      bio: "Retired Marine Staff Sergeant and Capitol Hill liaison.",
    },
    {
      name: "Jennifer Lee",
      title: "Director of Member Services",
      bio: "Navy veteran and advocate for military family support programs.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MEAA</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            The Military Enlisted Association of America is the nation's leading advocacy organization for enlisted service members and their families.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                MEAA was founded on a simple principle: enlisted service members deserve the same level of national advocacy that has long existed for military officers.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For over 90 years, organizations like MOAA have advocated for officers in Washington, DC. They've protected retirement benefits, shaped compensation policy, and ensured officers have a voice in national defense debates.
              </p>
              <p className="text-lg text-gray-700">
                Enlisted personnel—who comprise over 80% of the military—had no comparable voice. MEAA was created to fill that gap and ensure enlisted perspectives shape federal military policy.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1646342029622-12f25838181e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMHZldGVyYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMxODQzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Military Veteran"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              To advocate for the interests of enlisted military service members and their families at the national policy level in Washington, DC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-[#0B1F3A]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">Policy Advocacy</h3>
              <p className="text-gray-700">Direct engagement with Congress and DoD on enlisted issues</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#0B1F3A]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">Member Services</h3>
              <p className="text-gray-700">Supporting enlisted personnel and their families</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="text-[#0B1F3A]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">Legislative Action</h3>
              <p className="text-gray-700">Tracking and influencing military legislation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#0B1F3A]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">Research</h3>
              <p className="text-gray-700">Data-driven analysis of enlisted quality of life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Enlisted Representation Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8 text-center">
            Why Enlisted Representation Matters
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
            <p>
              <strong className="text-[#C9A227]">Enlisted service members face unique challenges.</strong> From junior pay grades struggling with cost of living to NCOs navigating family healthcare, the enlisted experience differs significantly from that of commissioned officers.
            </p>
            <p>
              Policy decisions in Washington directly impact enlisted families: basic housing allowances, TRICARE access, childcare availability, spousal employment support, and transition assistance programs.
            </p>
            <p>
              Without dedicated advocacy, these issues often receive less attention than officer-focused policies. MEAA ensures enlisted voices are heard when Congress debates the National Defense Authorization Act, when DoD proposes regulation changes, and when military compensation is reviewed.
            </p>
            <p className="font-semibold text-[#0B1F3A]">
              Enlisted personnel make up 82% of the active duty force. Their representation in Washington should reflect that reality.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership and Advisory Board */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-[#0B1F3A] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#C9A227] text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[#0B1F3A] text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#C9A227] text-center mb-3">{member.title}</p>
                <p className="text-gray-700 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Impact Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">National Impact Vision</h2>
          <p className="text-xl text-gray-700 mb-8">
            MEAA is building a national infrastructure to advocate for enlisted personnel across all policy domains: from Capitol Hill to the Pentagon, from state legislatures to local communities.
          </p>
          <p className="text-xl text-gray-700">
            Our goal is simple: ensure every policy decision affecting military life includes enlisted perspectives—and that those perspectives carry weight equal to their representation in uniform.
          </p>
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
