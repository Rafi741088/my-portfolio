function Services() {
  const services = [
    {
      number: "01",
      icon: "💻",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites and web applications using React, JavaScript and modern web technologies.",
      tags: ["React", "JavaScript", "Responsive"],
    },
    {
      number: "02",
      icon: "🤖",
      title: "AI Solutions",
      description:
        "AI-powered digital solutions that help automate tasks, improve productivity and create smarter user experiences.",
      tags: ["AI", "Automation", "AI Tools"],
    },
    {
      number: "03",
      icon: "📈",
      title: "Digital Marketing",
      description:
        "Digital marketing strategies focused on building online presence, increasing engagement and growing your brand.",
      tags: ["Social Media", "Content", "Growth"],
    },
    {
      number: "04",
      icon: "🚀",
      title: "Business Growth",
      description:
        "Digital strategies and creative solutions designed to help businesses improve their brand, reach more customers and grow.",
      tags: ["Strategy", "Branding", "Growth"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0D1117] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#00D084]/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#00A8FF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-xs font-bold tracking-[4px] text-[#00D084]">
            WHAT I DO
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            I combine development, AI and digital strategy to
            create solutions that help ideas become real digital
            products.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]/70 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#00D084]/40 hover:bg-[#111820] md:p-9"
            >

              {/* Top Line */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] transition-all duration-700 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl transition duration-500 group-hover:scale-110 group-hover:border-[#00D084]/30 group-hover:bg-[#00D084]/10">
                  {service.icon}
                </div>

                <span className="text-4xl font-black text-white/5 transition duration-500 group-hover:text-[#00D084]/10">
                  {service.number}
                </span>

              </div>

              {/* Content */}
              <h3 className="mt-7 text-2xl font-bold transition duration-300 group-hover:text-[#00D084]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">

                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition duration-300 group-hover:border-[#00D084]/20 group-hover:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#00D084]">
                Explore Service
                <span className="transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#00D084]/20 bg-gradient-to-r from-[#00D084]/10 via-[#00A8FF]/5 to-[#D4AF37]/10 p-8 text-center md:p-12">

          <p className="text-sm font-semibold tracking-wider text-[#00D084]">
            HAVE A PROJECT IN MIND?
          </p>

          <h3 className="mt-3 text-2xl font-bold md:text-4xl">
            Let's turn your idea into reality.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            Whether you need a website, AI solution or digital
            growth strategy, let's discuss your project.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D084] to-[#00A8FF] px-7 py-3.5 font-bold text-[#06100C] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(0,208,132,0.25)]"
          >
            Let's Work Together
            <span className="text-lg">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;