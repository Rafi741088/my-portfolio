function About() {
  const stats = [
    {
      number: "10+",
      title: "Projects",
    },
    {
      number: "6+",
      title: "Technologies",
    },
    {
      number: "1+",
      title: "Years Learning",
    },
    {
      number: "24/7",
      title: "Learning Mindset",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0D1117] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">

          <p className="text-[#00C37A] font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Turning Ideas Into
            <span className="text-[#00C37A]"> Digital Experiences</span>
          </h2>

          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-5"></div>

        </div>


        {/* ABOUT CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h3 className="text-3xl font-bold mb-5">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-8 mb-5">
              I'm Abidur Rahman Rafi, a passionate Web Developer
              and AI Specialist focused on building modern,
              responsive and user-friendly digital experiences.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              I work with modern web technologies such as
              JavaScript, React, Next.js and Node.js. I'm continuously
              learning new technologies and exploring how AI can
              improve the way we build digital products.
            </p>

            <p className="text-gray-400 leading-8">
              My goal is to create useful digital solutions that
              combine clean design, modern technology and real
              business value.
            </p>

          </div>


          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-[#111820]
                border border-white/10
                rounded-2xl p-7 text-center
                hover:border-[#00C37A]/50
                hover:-translate-y-2
                transition-all duration-300"
              >

                <h4
                  className="text-4xl md:text-5xl font-bold
                  text-[#00C37A]
                  group-hover:text-[#D4AF37]
                  transition"
                >
                  {stat.number}
                </h4>

                <p className="text-gray-400 mt-3">
                  {stat.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;