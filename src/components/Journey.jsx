const journey = [
  {
    year: "2026",
    title: "React & Modern Web Development",
    type: "Learning",
    description:
      "Currently building modern web applications with React.js, JavaScript, Tailwind CSS and exploring Next.js and Node.js.",
  },
  {
    year: "2026",
    title: "AI & Digital Solutions",
    type: "Professional Development",
    description:
      "Exploring AI tools, AI-powered workflows and modern digital solutions for businesses and creators.",
  },
  {
    year: "2026",
    title: "Brand Promoter",
    type: "Professional Experience",
    description:
      "Working on brand promotion, digital marketing, sales processes and business growth activities.",
  },
  {
    year: "2025–2026",
    title: "JavaScript & API Development",
    type: "Learning",
    description:
      "Built JavaScript projects and learned REST API integration, asynchronous programming and modern ES6 concepts.",
  },
  {
    year: "Education",
    title: "Diploma in Computer Science",
    type: "Education",
    description:
      "Studied Computer Science and Engineering fundamentals with a focus on technology and practical skills.",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#0D1117] text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-[#00C37A] font-semibold tracking-[4px] uppercase">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Experience &
            <span className="text-[#00C37A]"> Growth</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A timeline of my learning, professional development
            and journey in technology.
          </p>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-5"></div>

        </div>


        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div
            className="absolute left-4 md:left-1/2
            top-0 bottom-0 w-px
            bg-gradient-to-b
            from-[#00C37A]
            via-[#00C37A]/40
            to-transparent
            md:-translate-x-1/2"
          ></div>


          {journey.map((item, index) => (

            <div
              key={index}
              className={`relative flex mb-12
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* DOT */}
              <div
                className="absolute left-4 md:left-1/2
                -translate-x-1/2
                w-4 h-4 rounded-full
                bg-[#00C37A]
                border-4 border-[#0D1117]
                shadow-[0_0_15px_rgba(0,195,122,0.5)]"
              ></div>


              {/* CARD */}
              <div
                className="ml-12 md:ml-0
                w-full md:w-[45%]
                bg-[#111820]
                border border-white/10
                rounded-2xl p-6
                hover:border-[#00C37A]/50
                hover:-translate-y-1
                transition-all duration-300"
              >

                <div className="flex justify-between gap-4 items-center">

                  <span className="text-[#D4AF37] font-semibold">
                    {item.year}
                  </span>

                  <span
                    className="text-xs px-3 py-1
                    rounded-full
                    bg-[#00C37A]/10
                    text-[#00C37A]
                    border border-[#00C37A]/20"
                  >
                    {item.type}
                  </span>

                </div>


                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mt-3">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;