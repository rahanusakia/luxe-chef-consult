
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-chef-dark">
      <Navbar />
      
      {/* Page Header */}
      <div 
        className="relative bg-cover bg-center py-28" 
        style={{ backgroundImage: 'url("/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-chef-darker/95 to-chef-darker/90"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-gold-light">Us</span>
          </h1>
          <div className="flex items-center justify-center text-sm md:text-base text-white/80 space-x-2">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <ArrowRight size={14} className="text-gold-light" />
            <span className="text-gold-light">Contact</span>
          </div>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
