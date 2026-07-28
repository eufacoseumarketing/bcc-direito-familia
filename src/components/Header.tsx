import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full border border-border/40 transition-all duration-300 ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-lg"
            : "bg-card/60 backdrop-blur-md"
        }`}
      >
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="BCC Advocacia" className="h-10 w-10 rounded-full" />
          <span className="font-serif text-lg font-semibold text-foreground hidden sm:inline">
            
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Agendar Consulta
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 transition-opacity hover:opacity-75"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/40 p-6 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-sans text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://api.whatsapp.com/send/?phone=5561998313480&text=Ol%C3%A1%2C+Quero+falar+com+a+Dra.+Mirlla&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-opacity hover:opacity-90"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
