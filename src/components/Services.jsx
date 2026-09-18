function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and user-friendly websites built with React, JavaScript, Next.js and Tailwind CSS.",
      tags: ["React", "Next.js", "JavaScript", "Tailwind"],
      icon: "</>",
      accent: "emerald",
    },
    {
      number: "02",
      title: "AI Solutions",
      description:
        "AI-powered tools, automation workflows and intelligent digital solutions designed to improve productivity.",
      tags: ["AI Tools", "Automation", "Prompt Engineering", "AI"],
      icon: "AI",
      accent: "blue",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Creative digital strategies, content ideas and online presence solutions designed to help brands grow.",
      tags: ["Content", "Social Media", "Branding", "Strategy"],
      icon: "↗",
      accent: "gold",
    },
    {
      number: "04",
      title: "Business Growth",
      description:
        "Technology and digital solutions that help businesses improve their online presence and customer experience.",
      tags: ["Growth", "Digital", "Strategy", "Solutions"],
      icon: "◆",
      accent: "cyan",
    },
  ];

  const accentStyles = {
    emerald: {
      text: "text-[#00D084]",
      border: "hover:border-[#00D084]/40",
      bg: "bg-[#00D084]/10",
      glow: "group-hover:bg-[#00D084]/10",
      line: "from-[#00D084]",
    },
    blue: {
      text: "text-[#00A8FF]",
      border: "hover:border-[#00A8FF]/40",
      bg: "bg-[#00A8FF]/10",
      glow: "group-hover:bg-[#00A8FF]/10",
      line: "from-[#00A8FF]",
    },
    gold: {
      text: "text-[#D4AF37]",
      border: "hover:border-[#D4AF37]/40",
      bg: "bg-[#D4AF37]/10",
      glow: "group-hover:bg-[#D4AF37]/10",
      line: "from-[#D4AF37]",
    },
    cyan: {
      text: "text-cyan-400",
      border: "hover:border-cyan-400/40",
      bg: "bg-cyan-400/10",
      glow: "group-hover:bg-cyan-400/10",
      line: "from-cyan-400",
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00D084]/5 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00A8FF]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            What I Do
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            I combine development, AI and digital technology to create
            practical solutions for modern businesses and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const style = accentStyles[service.accent];

            return (
              <article
                key={service.number}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]/70 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${style.border}`}
              >
                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${style.bg} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                />

                {/* Top Line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-px bg-gradient-to-r ${style.line} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black tracking-[3px] ${style.text}`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ${style.bg} text-sm font-black ${style.text} transition duration-500 group-hover:scale-110`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-xl font-bold text-white transition duration-300 group-hover:text-[#00D084]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 min-h-[112px] text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 transition duration-300 group-hover:border-white/15 group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Arrow */}
                  <div
                    className={`mt-7 flex items-center gap-2 text-xs font-bold ${style.text} opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                  >
                    Explore Service
                    <span>→</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#111820] via-[#0D141B] to-[#111820] p-8 md:p-10">
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#00D084]/10 blur-[80px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-[#00A8FF]/10 blur-[70px]" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#D4AF37]">
                Have a Project?
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Let's turn your idea into reality.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Tell me what you're building, and let's explore how technology
                can help bring your idea to life.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-full bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-7 py-3.5 text-sm font-black text-black shadow-[0_0_30px_rgba(0,208,132,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,208,132,0.25)]"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;