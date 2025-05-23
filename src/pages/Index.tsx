
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

// The Index page is an exception as it has a unique layout with the hero section
const Index = () => {
  return (
    <div className="min-h-screen bg-chef-light">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
