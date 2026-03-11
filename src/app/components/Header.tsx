import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/policy", label: "Policy & Advocacy" },
    { path: "/policy-tracker", label: "Policy Tracker" },
    { path: "/membership", label: "Membership" },
    { path: "/news", label: "News & Insights" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-[#0B1F3A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center">
              <span className="text-[#0B1F3A] font-bold text-xl">MEAA</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold">MEAA</div>
              <div className="text-xs text-gray-300">Military Enlisted Association of America</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-[#C9A227] text-[#0B1F3A] font-semibold"
                    : "hover:bg-[#1a3352]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/membership"
            className="hidden lg:block bg-[#C9A227] text-[#0B1F3A] px-6 py-2 rounded font-semibold hover:bg-[#b39020] transition-colors"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-[#C9A227] text-[#0B1F3A] font-semibold"
                    : "hover:bg-[#1a3352]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#C9A227] text-[#0B1F3A] px-4 py-2 rounded font-semibold text-center"
            >
              Join MEAA
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}