import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const phoneNumber = "+6282273507458";
  const message = "Hello, I'd like to discuss your chef consultancy services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const isHomePage = location.pathname === '/';
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-chef-dark py-2 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white">
          <ChefHat className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
          <span className="font-playfair text-xl md:text-2xl font-semibold">LuxeChef</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? <>
              <a href="#about" className="text-white hover:text-gold-light transition-colors">About</a>
              <a href="#services" className="text-white hover:text-gold-light transition-colors">Services</a>
              <a href="#testimonials" className="text-white hover:text-gold-light transition-colors">Testimonials</a>
            </> : <Link to="/" className="text-white hover:text-gold-light transition-colors">Home</Link>}
          <Link to="/cv" className="text-white hover:text-gold-light transition-colors">CV</Link>
          <Link to="/fee" className="text-white hover:text-gold-light transition-colors">Fee</Link>
          <Link to="/contact" className="text-white hover:text-gold-light transition-colors">Contact</Link>
          <Button asChild variant="outline" className="border-gold-light text-gold-light hover:bg-gold-light/20 hover:text-gold-light">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-chef-dark hover:bg-chef-darker text-slate-100 border border-gold-dark/30 font-semibold">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} className="text-gold-light" /> : <Menu size={24} className="text-gold-light" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-chef-darker text-white absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            {isHomePage ? <>
                <a href="#about" className="py-2 hover:text-gold-light transition-colors">About</a>
                <a href="#services" className="py-2 hover:text-gold-light transition-colors">Services</a>
                <a href="#testimonials" className="py-2 hover:text-gold-light transition-colors">Testimonials</a>
              </> : <Link to="/" className="py-2 hover:text-gold-light transition-colors">Home</Link>}
            <Link to="/cv" className="py-2 hover:text-gold-light transition-colors">CV</Link>
            <Link to="/fee" className="py-2 hover:text-gold-light transition-colors">Fee</Link>
            <Link to="/contact" className="py-2 hover:text-gold-light transition-colors">Contact</Link>
            <Button asChild variant="outline" className="border-gold-light text-gold-light hover:bg-gold-light/20 w-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;