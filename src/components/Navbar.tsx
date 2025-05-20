
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-chef-dark py-2 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-white">
          <ChefHat className="h-6 w-6 text-gold-light" />
          <span className="font-playfair text-xl md:text-2xl font-semibold">LuxeChef</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-gold-light transition-colors">About</a>
          <a href="#services" className="text-white hover:text-gold-light transition-colors">Services</a>
          <a href="#testimonials" className="text-white hover:text-gold-light transition-colors">Testimonials</a>
          <Button asChild variant="outline" className="border-gold-light text-gold-light hover:bg-gold-light hover:text-chef-dark">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-chef-darker text-white absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            <a 
              href="#about" 
              className="py-2 hover:text-gold-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="py-2 hover:text-gold-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="py-2 hover:text-gold-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              asChild 
              variant="outline" 
              className="border-gold-light text-gold-light hover:bg-gold-light hover:text-chef-dark w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
