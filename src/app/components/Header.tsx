import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Newspaper, TrendingUp, BookOpen, Radio, Flag, ListChecks, MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const policyDropdownItems = [
  {
    path: "/policy",
    label: "Policy & Advocacy",
    description: "Our priorities, legislative engagement, and congressional outreach",
    icon: Flag,
  },
  {
    path: "/policy-tracker",
    label: "Policy Tracker",
    description: "Track legislation affecting enlisted service members in real time",
    icon: ListChecks,
  },
  {
    path: "/find-your-lawmakers",
    label: "Find Your Lawmakers",
    description: "Look up your members of Congress and send an advocacy message",
    icon: MapPin,
  },
];

const newsDropdownItems = [
  {
    path: "/news",
    label: "News",
    description: "Policy developments and organizational announcements",
    icon: Newspaper,
  },
  {
    path: "/insights",
    label: "Insights & Analysis",
    description: "Expert commentary on military policy and legislation",
    icon: TrendingUp,
  },
  {
    path: "/research",
    label: "Research & Reports",
    description: "Long-form policy reports and research publications",
    icon: BookOpen,
  },
  {
    path: "/press",
    label: "Press Center",
    description: "Media resources, press releases, and statements",
    icon: Radio,
  },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policyDropdownOpen, setPolicyDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const policyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/membership", label: "Membership" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const isPolicyActive = policyDropdownItems.some((item) => isActive(item.path));
  const isNewsActive = newsDropdownItems.some((item) => isActive(item.path));

  const openPolicyDropdown = () => {
    if (policyCloseTimer.current) clearTimeout(policyCloseTimer.current);
    setPolicyDropdownOpen(true);
  };
  const closePolicyDropdown = () => {
    policyCloseTimer.current = setTimeout(() => setPolicyDropdownOpen(false), 120);
  };

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setNewsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setNewsDropdownOpen(false), 120);
  };

  return (
    <header className="bg-[#0B1F3A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center">
              <span className="text-[#0B1F3A] font-bold text-sm tracking-wide">MEAA</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold">MEAA</div>
              <div className="text-xs text-gray-300">Military Enlisted Association of America</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home, About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded transition-colors whitespace-nowrap text-sm ${
                  isActive(link.path)
                    ? "bg-[#C9A227] text-[#0B1F3A] font-semibold"
                    : "hover:bg-[#1a3352]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Policy & Advocacy Dropdown */}
            <div className="relative" onMouseEnter={openPolicyDropdown} onMouseLeave={closePolicyDropdown}>
              <button
                onClick={() => setPolicyDropdownOpen((o) => !o)}
                className={`flex items-center gap-1 px-3 py-2 rounded transition-colors whitespace-nowrap text-sm ${
                  isPolicyActive ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
                }`}
              >
                Policy & Advocacy
                <ChevronDown size={14} className={`transition-transform duration-200 ${policyDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {policyDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseEnter={openPolicyDropdown}
                    onMouseLeave={closePolicyDropdown}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {policyDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setPolicyDropdownOpen(false)}
                        className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group ${isActive(item.path) ? "bg-amber-50" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isActive(item.path) ? "bg-[#C9A227]" : "bg-gray-100 group-hover:bg-[#C9A227]"
                        }`}>
                          <item.icon size={15} className={isActive(item.path) ? "text-[#0B1F3A]" : "text-gray-600 group-hover:text-[#0B1F3A]"} />
                        </div>
                        <div>
                          <div className={`text-sm font-semibold ${isActive(item.path) ? "text-[#C9A227]" : "text-[#0B1F3A]"}`}>{item.label}</div>
                          <div className="text-xs text-gray-500 leading-snug mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Membership */}
            <Link
              to="/membership"
              className={`px-3 py-2 rounded transition-colors whitespace-nowrap text-sm ${
                isActive("/membership") ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
              }`}
            >
              Membership
            </Link>

            {/* News & Insights Dropdown */}
            <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button
                onClick={() => setNewsDropdownOpen((o) => !o)}
                className={`flex items-center gap-1 px-3 py-2 rounded transition-colors whitespace-nowrap text-sm ${
                  isNewsActive ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
                }`}
              >
                News & Insights
                <ChevronDown size={14} className={`transition-transform duration-200 ${newsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {newsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {newsDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setNewsDropdownOpen(false)}
                        className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group ${isActive(item.path) ? "bg-amber-50" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isActive(item.path) ? "bg-[#C9A227]" : "bg-gray-100 group-hover:bg-[#C9A227]"
                        }`}>
                          <item.icon size={15} className={isActive(item.path) ? "text-[#0B1F3A]" : "text-gray-600 group-hover:text-[#0B1F3A]"} />
                        </div>
                        <div>
                          <div className={`text-sm font-semibold ${isActive(item.path) ? "text-[#C9A227]" : "text-[#0B1F3A]"}`}>{item.label}</div>
                          <div className="text-xs text-gray-500 leading-snug mt-0.5">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 rounded transition-colors whitespace-nowrap text-sm ${
                isActive("/contact") ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            to="/membership"
            className="hidden lg:block border-2 border-[#C9A227] text-[#C9A227] px-6 py-2 rounded font-semibold hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors whitespace-nowrap text-sm"
          >
            Join MEAA
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-[#1a3352]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-[#0B1F3A] shadow-[0_8px_24px_rgba(0,0,0,0.4)] pb-4 px-4 space-y-1 z-50"
          >
            {/* Home, About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(link.path) ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Policy & Advocacy group */}
            <div className="pt-1 pb-1">
              <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Policy & Advocacy
              </div>
              {policyDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block pl-8 pr-4 py-2 rounded transition-colors text-sm ${
                    isActive(item.path) ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Membership */}
            <Link
              to="/membership"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded transition-colors ${
                isActive("/membership") ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
              }`}
            >
              Membership
            </Link>

            {/* Mobile News & Insights group */}
            <div className="pt-1 pb-1">
              <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                News & Insights
              </div>
              {newsDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block pl-8 pr-4 py-2 rounded transition-colors text-sm ${
                    isActive(item.path) ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded transition-colors ${
                isActive("/contact") ? "bg-[#C9A227] text-[#0B1F3A] font-semibold" : "hover:bg-[#1a3352]"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/membership"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-2 border-[#C9A227] text-[#C9A227] px-4 py-2 rounded font-semibold text-center hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-colors mt-2"
            >
              Join MEAA
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
