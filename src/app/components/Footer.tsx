import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#C9A227] rounded-full flex items-center justify-center">
                <span className="text-[#0B1F3A] font-bold text-sm tracking-wide">MEAA</span>
              </div>
              <div className="font-bold text-lg">MEAA</div>
            </div>
            <p className="text-gray-300 text-sm">
              The Military Enlisted Association of America advocates for the millions of enlisted service members and families who defend this nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#C9A227]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                  About MEAA
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                  Policy & Advocacy
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link to="/find-your-lawmakers" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                  Find Your Lawmakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#C9A227]">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Washington, DC<br />National Headquarters</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@meaa.org" className="hover:text-[#C9A227] transition-colors">
                  info@meaa.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#C9A227]">Stay Informed</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive policy updates and advocacy news.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-white/10 border border-white/20 text-base sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227]"
              />
              <button className="bg-[#C9A227] text-[#0B1F3A] px-4 py-2 rounded font-semibold hover:bg-[#b39020] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                {/* Facebook */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                {/* X / Twitter */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors">
                {/* LinkedIn */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>&copy; 2026 Military Enlisted Association of America. All rights reserved.</p>
              <div className="space-x-4 mt-2">
                <Link to="#" className="hover:text-[#C9A227] transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link to="#" className="hover:text-[#C9A227] transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
