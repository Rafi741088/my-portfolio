function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080C10] px-5 py-14 text-white md:px-10">

      {/* Glow */}
      <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#00D084]/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#00A8FF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              {/* CSS Logo */}
              <div className="relative flex h-14 w-14 items-center justify-center">

                <div className="absolute inset-1 rotate-45 rounded-xl border border-[#00D084]/40 transition duration-500 group-hover:rotate-90" />

                <span className="relative text-xl font-black italic">
                  <span className="text-[#00D084]">A</span>
                  <span className="text-[#D4AF37]">R</span>
                </span>

              </div>

              <div>
                <h3 className="text-xl font-black tracking-wide">
                  ABIDUR{" "}
                  <span className="text-[#00D084]">
                    RAHMAN
                  </span>
                </h3>

                <p className="mt-1 text-[9px] font-bold tracking-[4px] text-[#D4AF37]">
                  RAFI
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Web Developer & AI Specialist focused on building
              modern digital experiences, smart solutions and
              meaningful products.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-sm font-bold uppercase tracking-[3px] text-[#00D084]">
              Quick Links
            </h4>

            <div className="mt-5 grid grid-cols-2 gap-3">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Services", "#services"],
                ["Journey", "#journey"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="w-fit text-sm text-slate-500 transition duration-300 hover:translate-x-1 hover:text-[#00D084]"
                >
                  {name}
                </a>
              ))}

            </div>

          </div>

          {/* Connect */}
          <div>

            <h4 className="text-sm font-bold uppercase tracking-[3px] text-[#00D084]">
              Connect
            </h4>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Let's connect and build something valuable
              together.
            </p>

            <div className="mt-5 flex gap-3">

              <a
                href="https://github.com/Rafi741088"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/40 hover:bg-[#00D084]/10 hover:text-[#00D084]"
              >
                GH
              </a>

              <a
                href="#contact"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#00A8FF]/40 hover:bg-[#00A8FF]/10 hover:text-[#00A8FF]"
              >
                LI
              </a>

              <a
                href="#contact"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
              >
                FB
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <p className="text-xs text-slate-600">
            © {currentYear} Abidur Rahman Rafi. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Built with{" "}
            <span className="font-semibold text-[#00D084]">
              React
            </span>{" "}
            +{" "}
            <span className="font-semibold text-[#00A8FF]">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;