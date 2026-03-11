import { Mail, Phone, MapPin, Send, Users, Briefcase, Newspaper } from "lucide-react";
import { Link } from "react-router";

export function ContactPage() {
  const contactOptions = [
    {
      icon: Users,
      title: "Join MEAA",
      description: "Become a member and strengthen our voice in Washington.",
      action: "View Membership Options",
      link: "/membership",
    },
    {
      icon: Briefcase,
      title: "Partner with Us",
      description: "Collaborate on advocacy initiatives and policy research.",
      action: "Learn About Partnerships",
      link: "/contact",
    },
    {
      icon: Newspaper,
      title: "Media Inquiries",
      description: "Press contacts and interview requests.",
      action: "Contact Media Team",
      link: "/press",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            There are many ways to support MEAA's mission to advocate for enlisted service members and their families.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-12 text-center">
            Ways to Get Involved
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col">
                <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="text-[#0B1F3A]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{option.title}</h3>
                <p className="text-gray-700 mb-6 flex-1">{option.description}</p>
                <Link
                  to={option.link}
                  className="inline-block bg-[#0B1F3A] text-white px-6 py-2 rounded font-semibold hover:bg-[#1a3352] transition-colors"
                >
                  {option.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Question</option>
                    <option value="policy">Policy Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="media">Media Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A227] text-[#0B1F3A] px-6 py-3 rounded font-semibold hover:bg-[#b39020] transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-6">National Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Washington, DC Office</p>
                      <p className="text-gray-700">National Advocacy Center</p>
                      <p className="text-gray-700">Washington, DC 20001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@meaa.org" className="text-[#C9A227] hover:underline">
                        info@meaa.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-[#C9A227] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+12025551234" className="text-[#C9A227] hover:underline">
                        (202) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B1F3A] text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-200">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM EST</p>
                  <p><span className="font-semibold">Saturday - Sunday:</span> Closed</p>
                </div>
                <p className="mt-6 text-gray-300 text-sm">
                  For urgent media inquiries outside of business hours, please email media@meaa.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              MEAA relies on dedicated volunteers to support our advocacy work, conduct research, engage with local communities, and amplify enlisted voices. Whether you can contribute a few hours a month or want to take on a leadership role, we have opportunities that fit your schedule and skills.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-3">Advocacy Volunteers</h3>
                <p className="text-gray-700 text-sm">Help engage with lawmakers, participate in advocacy campaigns, and support grassroots efforts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-3">Research Support</h3>
                <p className="text-gray-700 text-sm">Assist with data collection, policy analysis, and research on enlisted quality of life issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-3">Community Outreach</h3>
                <p className="text-gray-700 text-sm">Connect with local military communities, organize events, and build awareness of MEAA's mission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-[#0B1F3A] mb-8">
            Join MEAA and help ensure enlisted service members have the representation they deserve in Washington.
          </p>
          <Link
            to="/membership"
            className="inline-block bg-[#0B1F3A] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#1a3352] transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
