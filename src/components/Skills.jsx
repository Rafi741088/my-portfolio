function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Creating responsive and interactive interfaces with modern frontend technologies.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      color: "emerald",
    },
    {
      number: "02",
      title: "Backend & Web",
      description:
        "Working with JavaScript-based backend technologies and modern web application architecture.",
      skills: ["Node.js", "Express.js", "REST API", "JSON", "Next.js"],
      color: "blue",
    },
    {
      number: "03",
      title: "AI & Digital Technology",
      description:
        "Exploring AI-powered tools, automation and technology-driven digital solutions.",
      skills: ["AI Tools", "AI Automation", "Prompt Engineering", "Digital Solutions"],
      color: "gold",
    },
    {
      number: "04",
      title: "Digital Growth",
      description:
        "Combining technology, content and digital marketing to support online growth.",
      skills: [
        "Digital Marketing",
        "Content Strategy",
        "Social Media",
        "Business Growth",
      ],
      color: "cyan",
    },
  ];

  const colorMap = {
    emerald: {
      text: "text-[#00D084]",
      border: "hover:border-[#00D084]/30",
      bg: "bg-[#00D084]/10",
      dot: "bg-[#00D084]",
    },
    blue: {
      text: "text-[#00A8FF]",
      border: "hover:border-[#00A8FF]/30",
      bg: "bg-[#00A8FF]/10",
      dot: "bg-[#00A8FF]",
    },
    gold: {
      text: "text-[#D4AF37]",
      border: "hover:border-[#D4AF37]/30",
      bg: "bg-[#D4AF37]/10",
      dot: "bg-[#D4AF37]",
    },
    cyan: {
      text: "text-cyan-400",
      border: "hover:border-cyan-400/30",
      bg: "bg-cyan-400/10",
      dot: "bg-cyan-400",
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#00A8FF]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            My Expertise
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#00D084] to-[#00A8FF] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            Technologies and areas I am currently working with and developing
            through practical projects.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const colors = colorMap[group.color];

            return (
              <article
                key={group.number}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111820]/70 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 ${colors.border}`}
              >
                {/* Decorative Number */}
                <span
                  className={`absolute -right-3 -top-8 text-8xl font-black opacity-[0.035] ${colors.text}`}
                >
                  {group.number}
                </span>

                <div className="relative">

                  {/* Number */}
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black ${colors.text}`}>
                      {group.number}
                    </span>

                    <span className="h-px w-10 bg-white/10" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-lg border border-white/10 ${colors.bg} px-3 py-2 text-xs font-semibold text-slate-300 transition duration-300 group-hover:border-white/15`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Currently Learning */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#111820]/80 to-[#0D141B]/80 p-7 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#D4AF37]">
                Currently Learning
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Always learning. Always building.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Continuously improving my React, Next.js, Node.js, AI and
                modern web development skills through hands-on projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
              {["React", "Next.js", "Node.js", "AI", "APIs"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#00D084]/20 bg-[#00D084]/5 px-4 py-2 text-xs font-semibold text-[#00D084]"
                >
                  {item}
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