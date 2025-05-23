
import { Phone } from "lucide-react";
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
      className="fixed bottom-8 right-8 z-50 shadow-lg rounded-full transition-transform duration-300 hover:scale-110"
    >
      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-xl border-2 border-white"
      >
        <Phone size={24} className="text-white" />
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-ping" />
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
        <span className="sr-only">Contact via WhatsApp</span>
      </Button>
    </a>
  );
};

export default FloatingWhatsApp;
