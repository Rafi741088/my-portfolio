function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: "🌐",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      level: 90,
      icon: "🎨",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "⚡",
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "React",
      level: 80,
      icon: "⚛️",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      level: 70,
      icon: "▲",
      color: "from-gray-300 to-white",
    },
    {
      name: "Node.js",
      level: 70,
      icon: "🟢",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "AI",
      level: 75,
      icon: "🤖",
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "Digital Marketing",
      level: 80,
      icon: "📈",
      color: "from-emerald-400 to-cyan-400",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#00D084]/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#00A8FF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-xs font-bold tracking-[4px] text-[#00D084]">
            MY SKILLS
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-[#00D084] via-[#00A8FF] to-[#D4AF37] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Technologies and skills I use to create modern,
            scalable and high-performance digital experiences.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-[#111820]/70 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#00D084]/40 hover:bg-[#111820]"
            >

              {/* Icon + Name */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-xl shadow-lg transition duration-500 group-hover:scale-110`}
                  >
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      Professional Skill
                    </p>
                  </div>

                </div>

                <span className="text-sm font-bold text-[#00D084]">
                  {skill.level}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(0,208,132,0.4)]`}
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#111820]/50 p-8 backdrop-blur-xl">

          <div className="text-center">

            <p className="text-xs font-bold tracking-[3px] text-slate-500">
              CURRENTLY LEARNING
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

              {[
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "REST API",
                "Git & GitHub",
                "AI Tools",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300 transition duration-300 hover:border-[#00D084]/40 hover:bg-[#00D084]/10 hover:text-[#00D084]"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;