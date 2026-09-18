import profileImage from "../assets/profile.jpg";
import TypingText from "./TypingText";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0F14] px-5 pt-28 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00D084]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#00A8FF]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Available Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D084]/20 bg-[#00D084]/5 px-4 py-2 text-xs font-medium text-[#00D084]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D084]" />
            </span>
            Available for new opportunities
          </div>

          {/* Intro */}
          <p className="text-lg font-medium text-slate-400 md:text-xl">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Abidur{" "}
            <span className="bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] bg-clip-text text-transparent">
              Rahman
            </span>
            <br />
            <span className="text-white">Rafi</span>
          </h1>

          {/* Typing */}
          <div className="mt-5 text-xl font-bold sm:text-2xl md:text-3xl">
            <TypingText />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg lg:mx-0">
            I build modern websites, interactive digital experiences and
            AI-powered solutions that help ideas become real products.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(0,208,132,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,208,132,0.3)]"
            >
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/50 hover:bg-[#00D084]/10 hover:text-[#00D084]"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            <span className="mr-2 text-xs uppercase tracking-[3px] text-slate-600">
              Connect
            </span>

            <a
              href="https://github.com/Rafi741088"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/40 hover:text-[#00D084]"
            >
              GH
            </a>

            <a
              href="#contact"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#00A8FF]/40 hover:text-[#00A8FF]"
            >
              LI
            </a>

            <a
              href="#contact"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              FB
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Outer Glow */}
          <div className="absolute inset-5 rounded-[3rem] bg-[#00D084]/10 blur-3xl" />

          {/* Decorative Ring */}
          <div className="absolute -inset-5 animate-[spin_18s_linear_infinite] rounded-[3rem] border border-dashed border-[#00D084]/20" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111820]/80 p-3 shadow-2xl backdrop-blur-xl">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#0D1319]">

              <img
                src={profileImage}
                alt="Abidur Rahman Rafi"
                className="h-[430px] w-full object-cover object-top transition duration-700 hover:scale-105 sm:h-[500px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-transparent to-transparent opacity-70" />

              {/* Bottom Label */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[3px] text-[#00D084]">
                  Web Developer • AI Specialist
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge 1 */}
          <div className="absolute -left-5 top-16 hidden rounded-2xl border border-[#00D084]/20 bg-[#111820]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">
              Expertise
            </p>
            <p className="mt-1 text-sm font-bold text-[#00D084]">
              Web Development
            </p>
          </div>

          {/* Floating Badge 2 */}
          <div className="absolute -right-5 bottom-20 hidden rounded-2xl border border-[#00A8FF]/20 bg-[#111820]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">
              Focus
            </p>
            <p className="mt-1 text-sm font-bold text-[#00A8FF]">
              AI Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-[#00D084] md:flex"
      >
        <span className="text-[9px] uppercase tracking-[4px]">
          Scroll
        </span>

        <span className="h-10 w-6 rounded-full border border-white/15 p-1">
          <span className="mx-auto block h-2 w-1 rounded-full bg-[#00D084] animate-bounce" />
        </span>
      </a>
    </section>
  );
}

export default Hero;