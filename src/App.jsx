import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Advantages from "./components/Advantages";
import Branches from "./components/Branches";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <About />
      <Courses />
      <Advantages />
      <Branches />
      <Reviews />
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
