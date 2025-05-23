import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';
const Hero = () => {
  const phoneNumber = "+6282273507458";
  const message = "Hello, I'd like to schedule a consultation for your chef services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{
    backgroundImage: 'url("/lovable-uploads/447d23ff-3be3-4464-b6ff-811dd4f764d6.png")'
  }} id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-chef-darker/95 to-chef-darker/90"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-6 animate-fade-in">
          <div className="h-16 w-16 rounded-full bg-gold-dark/40 flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-gold-light" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in bg-chef-darker/60 inline-block px-6 py-2 rounded-lg shadow-lg backdrop-blur-sm">
          Elevate Your <span className="text-gold-light">Culinary</span> Business
        </h1>
        <p className="text-xl md:text-2xl text-gold-light font-playfair italic mb-8 max-w-3xl mx-auto animate-fade-in bg-chef-darker/60 p-4 rounded-lg shadow-lg backdrop-blur-sm">
          Expert chef consultancy for restaurants, hotels, and fine dining enterprises
        </p>
        <p className="text-white mb-10 max-w-2xl mx-auto animate-fade-in bg-chef-darker/70 p-4 rounded-lg shadow-lg backdrop-blur-sm">
          We bring decades of fine dining expertise to transform your culinary operations, 
          menu development, and staff training. Experience excellence with LuxeChef Consulting.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button asChild size="lg" className="bg-chef-dark hover:bg-chef-darker text-gold-light font-medium px-8 
                                            shadow-lg shadow-gold-DEFAULT/20 transition-all duration-300 transform hover:scale-105">
            <a href="#services">Our Services</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold-light text-gold-light bg-chef-dark/80 hover:bg-chef-dark 
                                                              shadow-lg shadow-gold-light/10 transition-all duration-300 transform hover:scale-105">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-chef-dark hover:bg-chef-darker text-slate-100 border border-gold-dark/30 font-semibold">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </div>;
};
export default Hero;