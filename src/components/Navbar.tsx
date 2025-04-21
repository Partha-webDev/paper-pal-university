
import { useState } from "react";
import { Menu, Home, Info, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone },
];

const Logo = () => (
  <span className="text-2xl font-extrabold text-accent dark:text-accent-dark tracking-tight select-none font-sans">
    PaperPal
  </span>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-30 bg-navbar shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">
        <a href="#home" className="flex items-center gap-2">
          <Logo />
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-text-muted hover:text-accent px-3 py-1 rounded-lg transition-colors duration-100 font-medium hover:shadow-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-accent rounded-lg hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent transition"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-48 py-3" : "max-h-0"
        } bg-navbar px-4`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block w-full text-text-muted hover:text-accent px-3 py-2 rounded-lg transition-colors duration-150 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
