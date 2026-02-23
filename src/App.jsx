import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import About from "./sections/About";      // ← add this
// import About from "./sections/About";   // ← add when ready
// import Contact from "./sections/Contact";
import Footer from "./components/Footer";
// import Header from "./components/Header"; // ← optional navbar

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      {/* <Header />  ← uncomment when you have a navbar */}

      <Hero />
      <About />
      <Portfolio />
      <Skills />
      {/* <Contact /> */}

      <Footer />
    </div>
  );
}