import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <About />
      <Achievements />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;