function Journey() {
  const journey = [
    {
      number: "01",
      title: "JavaScript & Web Fundamentals",
      category: "Foundation",
      description:
        "Built a strong foundation in HTML, CSS and JavaScript, including modern ES6 concepts, JSON and API fundamentals.",
      technologies: ["HTML", "CSS", "JavaScript", "ES6", "JSON", "API"],
      accent: "emerald",
    },
    {
      number: "02",
      title: "React Development",
      category: "Frontend",
      description:
        "Learning component-based development with React, including JSX, props, state, hooks, events and reusable components.",
      technologies: ["React", "JSX", "Components", "useState", "Hooks"],
      accent: "blue",
    },
    {
      number: "03",
      title: "Modern Web Development",
      category: "Development",
      description:
        "Expanding into modern application development with Next.js, Node.js, Express.js and REST APIs.",
      technologies: ["Next.js", "Node.js", "Express.js", "REST API"],
      accent: "gold",
    },
    {
      number: "04",
      title: "AI & Digital Solutions",
      category: "Future Focus",
      description:
        "Exploring AI-powered tools, automation and digital solutions alongside modern web development.",
      technologies: ["AI", "Automation", "AI Tools", "Digital Solutions"],
      accent: "cyan",
    },
  ];

  const accentStyles = {
    emerald: {
      text: "text-[#00D084]",
      border: "border-[#00D084]/30",
      bg: "bg-[#00D084]",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,208,132,0.12)]",
    },
    blue: {
      text: "text-[#00A8FF]",
      border: "border-[#00A8FF]/30",
      bg: "bg-[#00A8FF]",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,168,255,0.12)]",
    },
    gold: {
      text: "text-[#D4AF37]",
      border: "border-[#D4AF37]/30",
      bg: "bg-[#D4AF37]",
      glow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]",
    },
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-400/30",
      bg: "bg-cyan-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
    },
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00D084]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            My Journey
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Learning &{" "}
            <span className="bg-gradient-to-r from-[#00D084] to-[#00A8FF] bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            A continuous journey of learning, building projects and expanding
            my technical capabilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Center Line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#00D084]/40 via-[#00A8FF]/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, index) => {
              const style = accentStyles[item.accent];
              const isRight = index % 2 === 1;

              return (
                <div
                  key={item.number}
                  className="group relative md:grid md:grid-cols-2 md:gap-14"
                >

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-[11px] top-7 z-20 h-3 w-3 rounded-full ${style.bg} ring-4 ring-[#0A0F14] md:left-1/2 md:-translate-x-1/2`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isRight ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <article
                      className={`rounded-3xl border border-white/10 bg-[#111820]/70 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 ${style.glow}`}
                    >
                      {/* Top */}
                      <div className="flex items-center justify-between gap-4">
                        <span
                          className={`text-xs font-black tracking-[3px] ${style.text}`}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`rounded-full border ${style.border} px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${style.text}`}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D084]" />

            <span className="text-xs font-medium text-slate-400">
              The journey continues — learning, building & improving.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;