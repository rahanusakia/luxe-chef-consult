
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: 'url("/hero-bg.jpg")' }} id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-chef-darker/90 to-chef-darker/80"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-gold-dark/30 flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-gold-light" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Elevate Your Culinary Business
        </h1>
        <p className="text-xl md:text-2xl text-gold-light font-playfair italic mb-8 max-w-3xl mx-auto">
          Expert chef consultancy for restaurants, hotels, and food enterprises
        </p>
        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          We bring decades of fine dining expertise to transform your culinary operations, 
          menu development, and staff training. Experience excellence with LuxeChef Consulting.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark font-medium px-8">
            <a href="#services">Our Services</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
