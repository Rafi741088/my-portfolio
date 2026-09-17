import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <div className="bg-[#0D1117] min-h-screen">

      <LoadingScreen />

      <Navbar />

      <main>

        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Journey />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>

      </main>

      <Footer />

      <ScrollToTop />

    </div>
  );
}

export default App;