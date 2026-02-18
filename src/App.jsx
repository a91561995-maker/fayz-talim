import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Advantages from "./components/Advantages";
import Branches from "./components/Branches";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Courses />
      <Advantages />
      <Branches />
      <Results/>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
