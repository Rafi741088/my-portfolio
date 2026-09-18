import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Journey", link: "#journey" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      navLinks.forEach((item) => {
        const section = document.querySelector(item.link);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0A0F14]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          {/* AR Logo */}
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-1 rotate-45 rounded-xl border border-[#00D084]/40 transition duration-500 group-hover:rotate-[135deg] group-hover:border-[#D4AF37]/60" />

            <span className="relative text-xl font-black italic">
              <span className="text-[#00D084]">A</span>
              <span className="text-[#D4AF37]">R</span>
            </span>
          </div>

          {/* Name */}
          <div className="leading-none">
            <h1 className="text-sm font-black tracking-wide text-white md:text-base">
              ABIDUR{" "}
              <span className="text-[#00D084]">
                RAHMAN
              </span>
            </h1>

            <p className="mt-1 text-[8px] font-bold tracking-[4px] text-[#D4AF37]">
              RAFI
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => {
            const sectionName = item.link.substring(1);
            const isActive = activeSection === sectionName;

            return (
              <a
                key={item.name}
                href={item.link}
                className={`group relative py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-[#00D084]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#00D084] to-[#00A8FF] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* Hire Button */}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-[#00D084]/40 bg-[#00D084]/10 px-5 py-2.5 text-sm font-bold text-[#00D084] transition duration-300 hover:-translate-y-0.5 hover:border-[#00D084] hover:bg-[#00D084] hover:text-black hover:shadow-[0_0_25px_rgba(0,208,132,0.25)]"
          >
            Hire Me
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-[#00D084]/40 hover:text-[#00D084] lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0A0F14]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const sectionName = item.link.substring(1);
              const isActive = activeSection === sectionName;

              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={handleLinkClick}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#00D084]/10 text-[#00D084]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-3 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-5 py-3 text-center text-sm font-bold text-black transition duration-300 hover:scale-[1.02]"
            >
              Hire Me →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;