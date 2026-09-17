import profileImage from "../assets/profile.jpg";
import TypingText from "./TypingText";
import Stats from "./Stats";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0D1117] text-white flex items-center overflow-hidden pt-20"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C37A]/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 blur-[130px] rounded-full animate-pulse"></div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="animate-fade-up">

            <p className="text-[#00C37A] text-lg font-semibold mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Abidur Rahman
              <span className="text-[#00C37A]"> Rafi</span>
            </h1>

            <h2 className="text-2xl md:text-3xl mt-5 font-semibold">
  <TypingText />
</h2>

            <p className="text-gray-400 text-lg mt-5 max-w-xl leading-8">
              I build modern, responsive and user-friendly websites
              using React, JavaScript and modern web technologies.
              I also work with AI and digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-[#00C37A] text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="border border-[#00C37A] text-[#00C37A] px-7 py-3 rounded-lg font-semibold hover:bg-[#00C37A] hover:text-black transition"
              >
                Contact Me
              </a>

            </div>

            {/* Stats */}
            <Stats />

          </div>


          {/* Right Side */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute inset-0 bg-[#00C37A] blur-[80px] opacity-20 animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-[#00C37A] animate-floating">

                <img
                  src={profileImage}
                  alt="Abidur Rahman Rafi"
                  className="w-full h-full object-cover rounded-full border-4 border-[#0D1117]"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;