import { Check, Users, FileText, Calendar, Heart, Shield } from "lucide-react";

export function MembershipPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Advocacy Representation",
      description: "Your voice strengthens our advocacy on Capitol Hill and with DoD leadership.",
    },
    {
      icon: FileText,
      title: "Policy Updates",
      description: "Regular updates on legislation and policies affecting enlisted personnel.",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with fellow enlisted members and advocates nationwide.",
    },
    {
      icon: Calendar,
      title: "Events & Briefings",
      description: "Exclusive access to policy briefings, webinars, and member events.",
    },
    {
      icon: Heart,
      title: "Family Support Resources",
      description: "Information and guidance for military families navigating benefits and transitions.",
    },
  ];

  const membershipTiers = [
    {
      name: "Active Duty / Guard / Reserve",
      price: "$25/year",
      description: "For currently serving enlisted personnel",
      features: [
        "Full voting membership",
        "Policy updates and alerts",
        "Member network access",
        "Event invitations",
        "Advocacy representation",
      ],
    },
    {
      name: "Veteran",
      price: "$35/year",
      description: "For former enlisted service members",
      features: [
        "Full voting membership",
        "Policy updates and alerts",
        "Member network access",
        "Event invitations",
        "Advocacy representation",
        "Transition resources",
      ],
    },
    {
      name: "Supporter",
      price: "$50/year",
      description: "For military families and advocates",
      features: [
        "Supporting membership",
        "Policy updates and alerts",
        "Member network access",
        "Event invitations",
        "Family support resources",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join MEAA</h1>
            <p className="text-xl text-gray-200">
              Your membership strengthens our voice in Washington and ensures enlisted perspectives shape military policy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8 text-center">
            Why Join MEAA?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 mb-12">
            <p>
              Enlisted service members have lacked dedicated national advocacy for far too long. While military officers have had powerful representation in Washington for decades, the 80% of the force that is enlisted has been without an equivalent voice.
            </p>
            <p>
              <strong className="text-[#C9A227]">MEAA changes that.</strong> When you join MEAA, you become part of the first national organization focused exclusively on advocating for enlisted interests at the federal policy level.
            </p>
            <p>
              Your membership directly supports our advocacy work with Congress, our policy research, and our engagement with Department of Defense leadership. Together, we ensure enlisted voices are heard when decisions are made about pay, benefits, healthcare, housing, and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758575514459-8a9b37d68047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGZhbWlseSUyMHJldW5pb258ZW58MXx8fHwxNzczMTg0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Military Family"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">Your Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-[#C9A227] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Amplify enlisted perspectives in congressional testimony and policy debates</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#C9A227] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Fund research on enlisted quality of life issues</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#C9A227] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Build a sustainable advocacy infrastructure for future generations</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#C9A227] mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Connect with a nationwide network of enlisted advocates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Membership Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-[#0B1F3A]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Membership Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 flex flex-col transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                  index === 0 ? 'border-[#C9A227]' : 'border-gray-200 hover:border-[#C9A227]'
                }`}
              >
                <div className={`p-6 ${index === 0 ? 'bg-[#C9A227]' : 'bg-gray-50'}`}>
                  <h3 className="text-2xl font-bold mb-2 text-[#0B1F3A]">
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${index === 0 ? 'text-[#0B1F3A]' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                  <div className="text-4xl font-bold mt-4 text-[#0B1F3A]">
                    {tier.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-[#C9A227] mr-2 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#0B1F3A] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a3352] transition-colors mt-6">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Who Should Join?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Current Enlisted Personnel</h3>
              <p className="text-gray-700 mb-4">
                Active duty, Guard, and Reserve enlisted members from all branches who want their voices heard in Washington.
              </p>
              <p className="text-gray-700">
                Your perspective matters. Whether you're a junior enlisted member or a senior NCO, your experience informs our advocacy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Veterans</h3>
              <p className="text-gray-700 mb-4">
                Former enlisted service members who understand the challenges and want to support current enlisted personnel.
              </p>
              <p className="text-gray-700">
                Your experience navigating military and veteran benefits provides valuable insights for our advocacy work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Military Families</h3>
              <p className="text-gray-700 mb-4">
                Spouses, parents, and family members who support enlisted personnel and understand the unique challenges they face.
              </p>
              <p className="text-gray-700">
                Family perspectives are critical to our advocacy on healthcare, childcare, education, and quality of life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Supporters & Advocates</h3>
              <p className="text-gray-700 mb-4">
                Individuals who believe enlisted service members deserve dedicated national representation.
              </p>
              <p className="text-gray-700">
                Your support helps build the advocacy infrastructure enlisted personnel have lacked for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of enlisted service members, veterans, and supporters building a stronger voice in Washington.
          </p>
          <button className="bg-[#C9A227] text-[#0B1F3A] px-10 py-4 rounded-lg text-xl font-semibold hover:bg-[#b39020] transition-colors">
            Become a Member Today
          </button>
          <p className="text-gray-300 mt-6 text-sm">
            Questions about membership? <a href="/contact" className="text-[#C9A227] hover:underline">Contact us</a>
          </p>
        </div>
      </section>
    </div>
  );
}
