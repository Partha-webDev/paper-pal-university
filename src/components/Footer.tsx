
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-navbar text-text-secondary mt-10 border-t border-[#222]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
        <div className="flex gap-4 mb-2 md:mb-0">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent text-text-secondary duration-100 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-xs font-light">&copy; {new Date().getFullYear()} PaperPal University</div>
      </div>
    </footer>
  );
}
