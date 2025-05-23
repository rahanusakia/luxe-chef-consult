
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const phoneNumber = "+6282273507458";
  const message = "Hello, I'd like to discuss your chef consultancy services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 transition-transform duration-300 hover:scale-110"
    >
      <Button 
        size="icon" 
        className="h-16 w-16 rounded-full bg-chef-dark shadow-xl border-2 border-gold-light hover:bg-chef-darker group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>
        <MessageCircle size={28} className="text-gold-light" />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-gold-light rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-gold-light rounded-full"></span>
        <span className="sr-only">Contact via WhatsApp</span>
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
