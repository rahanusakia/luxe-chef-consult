
import { ChefHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chef-darker text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="h-6 w-6 text-gold-light" />
              <span className="font-playfair text-xl font-semibold">LuxeChef</span>
            </div>
            <p className="text-white/70 mb-6">
              Elevating culinary businesses through expert consultation, 
              innovative solutions, and operational excellence.
            </p>
            <p className="text-white/70 text-sm">
              © {currentYear} LuxeChef Consultancy. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold-light mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-white/70 hover:text-gold-light transition-colors">About Us</a>
              <a href="#services" className="text-white/70 hover:text-gold-light transition-colors">Our Services</a>
              <a href="#testimonials" className="text-white/70 hover:text-gold-light transition-colors">Testimonials</a>
              <a href="#contact" className="text-white/70 hover:text-gold-light transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-gold-light mb-6">Connect With Us</h4>
            <p className="text-white/70 mb-4">
              Join our newsletter to receive updates on culinary trends, events, and exclusive insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-chef-dark border border-gold-dark/30 text-white rounded-l outline-none focus:border-gold-light flex-grow"
              />
              <button className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark px-4 py-2 rounded-r font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>Designed with excellence for culinary professionals worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
