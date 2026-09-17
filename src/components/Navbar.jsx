function Navbar() {
  return (
    <nav className="bg-[#0D1117] text-white px-8 py-4 flex justify-between items-center">
      <a
  href="#home"
  className="group flex items-center gap-2"
>
  {/* AR Logo Mark */}
  <div className="relative w-11 h-11 flex items-center justify-center">

    <div className="absolute inset-0 rounded-xl bg-[#00C37A]/10 border border-[#00C37A]/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>

    <span className="relative text-lg font-black italic">
      <span className="text-[#00C37A]">A</span>
      <span className="text-[#D4AF37]">R</span>
    </span>

  </div>

  {/* Name */}
  <div className="leading-none">
    <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
      <span className="text-white">ABIDUR</span>{" "}
      <span className="text-[#00C37A]">RAHMAN</span>
    </h1>

    <p className="text-[9px] md:text-[10px] tracking-[4px] text-[#D4AF37] mt-1">
      RAFI
    </p>
  </div>
</a>
      

      <ul className="flex gap-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;