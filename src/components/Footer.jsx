function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#090D12] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

  <div className="relative w-14 h-14 flex items-center justify-center">
    <div className="absolute inset-0 rounded-xl border border-[#00C37A]/40 rotate-45"></div>

    <span className="relative text-xl font-black italic">
      <span className="text-[#00C37A]">A</span>
      <span className="text-[#D4AF37]">R</span>
    </span>
  </div>

  <div>
    <h3 className="text-xl font-extrabold">
      ABIDUR <span className="text-[#00C37A]">RAHMAN</span>
    </h3>

    <p className="text-[#D4AF37] text-[9px] tracking-[4px] mt-1">
      RAFI
    </p>
  </div>

</div>

            <h3 className="text-2xl font-bold mt-3">
              Abidur Rahman <span className="text-[#00C37A]">Rafi</span>
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Web Developer & AI Specialist building modern
              digital experiences and practical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-5">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00C37A] transition"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold mb-5">
              Connect With Me
            </h4>

            <div className="flex gap-3">
              <a
                href="https://github.com/Rafi741088"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00C37A] hover:text-[#00C37A] transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-4 py-2 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00C37A] hover:text-[#00C37A] transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="px-4 py-2 rounded-lg bg-[#111820] border border-white/10 hover:border-[#00C37A] hover:text-[#00C37A] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {year} Abidur Rahman Rafi. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Designed & Developed with React.js
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;