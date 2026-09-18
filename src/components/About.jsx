function About() {
  const highlights = [
    {
      title: "Web Development",
      text: "Building responsive and modern web interfaces with React, JavaScript and Next.js.",
      icon: "01",
    },
    {
      title: "AI & Technology",
      text: "Exploring AI tools and intelligent solutions to improve digital products and workflows.",
      icon: "02",
    },
    {
      title: "Digital Growth",
      text: "Combining technology, creativity and digital marketing to create useful online experiences.",
      icon: "03",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A0F14] px-5 py-24 text-white md:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00D084]/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[4px] text-[#00D084]">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-[#00D084] to-[#00A8FF] bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <p className="text-lg font-semibold leading-8 text-slate-200">
              I'm Abidur Rahman Rafi, a Web Developer and AI Specialist
              focused on learning, building and creating modern digital
              solutions.
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400 md:text-base">
              My current focus is modern web development with JavaScript,
              React, Next.js and Node.js. Alongside development, I'm exploring
              AI and digital technologies to build smarter and more useful
              products.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">
              I believe consistent learning and real-world projects are the
              best way to improve. My goal is to keep developing practical
              skills and turn ideas into valuable digital experiences.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#skills"
                className="rounded-full bg-[#00D084] px-6 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,208,132,0.25)]"
              >
                Explore My Skills →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:border-[#00A8FF]/40 hover:text-[#00A8FF]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.icon}
                className="group rounded-2xl border border-white/10 bg-[#111820]/70 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#00D084]/30"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-black tracking-widest text-[#00D084]">
                    {item.icon}
                  </span>

                  <div>
                    <h3 className="font-bold text-white transition group-hover:text-[#00D084]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">

          <div className="border-white/10 px-5 py-7 text-center md:border-r">
            <p className="text-2xl font-black text-[#00D084]">JS</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-600">
              Core Technology
            </p>
          </div>

          <div className="border-white/10 px-5 py-7 text-center md:border-r">
            <p className="text-2xl font-black text-[#00A8FF]">React</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-600">
              Frontend
            </p>
          </div>

          <div className="border-white/10 px-5 py-7 text-center md:border-r">
            <p className="text-2xl font-black text-[#D4AF37]">AI</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-600">
              Technology
            </p>
          </div>

          <div className="px-5 py-7 text-center">
            <p className="text-2xl font-black text-white">∞</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-slate-600">
              Learning Mindset
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;