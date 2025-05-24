
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LuxeChef Consultancy transformed our restaurant's menu and operations. Our guest satisfaction scores increased by 40% and food costs decreased significantly.",
      name: "Isabella Martinez",
      role: "Owner, Maison Lumière Restaurant",
      image: "/lovable-uploads/447d23ff-3be3-4464-b6ff-811dd4f764d6.png",
      fallbackImage: "https://source.unsplash.com/7YVZYZeITc8",
      initials: "IM"
    },
    {
      quote: "The culinary team training provided by LuxeChef was exceptional. Our chefs now work with greater precision, creativity, and efficiency than ever before.",
      name: "James Robertson",
      role: "Executive Director, The Grand Hotel",
      image: "/lovable-uploads/935ed434-3364-4040-88ec-79d34f722add.png",
      fallbackImage: "https://source.unsplash.com/sibVwORYqs0",
      initials: "JR"
    },
    {
      quote: "Their strategic guidance helped us secure our first Michelin star within 18 months of opening. The ROI on their consultancy has been extraordinary.",
      name: "Sophie Chen",
      role: "Founder, Azure Fine Dining",
      image: "/lovable-uploads/9a801591-fe5f-4493-91f3-a790dfc59885.png",
      fallbackImage: "https://source.unsplash.com/iFgRcqHznqg",
      initials: "SC"
    },
    {
      quote: "David's expertise in fine dining operations helped us streamline our kitchen processes while maintaining exceptional quality standards.",
      name: "Marcus Johnson",
      role: "CEO, Sapphire Hospitality Group",
      image: "/lovable-uploads/6fa56379-4b02-4aca-92d4-3c1bdceec894.png",
      fallbackImage: "https://source.unsplash.com/IF9TK5Uy-KI",
      initials: "MJ"
    },
    {
      quote: "We've seen a 35% increase in repeat customers since implementing LuxeChef's service excellence program. Their impact has been tremendous.",
      name: "Elena Vasquez",
      role: "General Manager, Coastal Brasserie",
      image: "/lovable-uploads/88a796a9-6939-418d-9e79-edb6e2df8edc.png",
      fallbackImage: "https://source.unsplash.com/7YVZYZeITc8",
      initials: "EV"
    },
    {
      quote: "The menu development process was collaborative and resulted in signature dishes that perfectly reflect our brand's identity.",
      name: "Thomas Wright",
      role: "Owner, Ember Grill & Wine Bar",
      image: "/lovable-uploads/b756b57d-9265-4f42-8c36-eb308c72a6d1.png", 
      fallbackImage: "https://source.unsplash.com/sibVwORYqs0",
      initials: "TW"
    },
    {
      quote: "LuxeChef's expertise in wine pairing and sommelier training elevated our beverage program to match our culinary excellence.",
      name: "Olivia Chang",
      role: "F&B Director, The Metropolitan Hotel",
      image: "/lovable-uploads/c3a7ed92-9ceb-474f-9233-19a8089f5ede.png",
      fallbackImage: "https://source.unsplash.com/iFgRcqHznqg",
      initials: "OC"
    },
    {
      quote: "Working with Chef David was transformative. His insights into modern gastronomy helped us stay ahead of dining trends while honoring our heritage.",
      name: "Richard Patel",
      role: "Executive Chef, Heritage Restaurant",
      image: "/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png",
      fallbackImage: "https://source.unsplash.com/IF9TK5Uy-KI",
      initials: "RP"
    },
    {
      quote: "The operational assessment provided clear, actionable recommendations that reduced our food waste by 25% and improved kitchen workflow dramatically.",
      name: "Charlotte Dubois",
      role: "Operations Director, Le Petit Château",
      image: "/lovable-uploads/a3c21c55-3279-4304-a2fd-cf0eabe212e3.png",
      fallbackImage: "https://source.unsplash.com/7YVZYZeITc8",
      initials: "CD"
    },
    {
      quote: "LuxeChef's staff training program not only improved our service standards but also boosted team morale and reduced turnover by 30%.",
      name: "Alexander Kim",
      role: "HR Director, Fusion Hospitality Group",
      image: "/lovable-uploads/a3c21c55-3279-4304-a2fd-cf0eabe212e3.png",
      fallbackImage: "https://source.unsplash.com/sibVwORYqs0",
      initials: "AK"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-chef-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-underline">Client Testimonials</h2>
          <p className="text-white/70 max-w-3xl mx-auto mt-8">
            Hear from the prestigious establishments that have experienced the LuxeChef difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-chef-darker p-8 md:p-12 rounded-lg border border-gold-dark/30">
            <div className="absolute -top-6 left-10">
              <div className="bg-gold-DEFAULT rounded-full p-3">
                <Quote className="h-6 w-6 text-chef-dark" />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-white/90 text-lg md:text-xl italic font-playfair mb-8">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-gold-DEFAULT/30">
                  <AvatarImage 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    onError={(e) => {
                      e.currentTarget.src = currentTestimonial.fallbackImage;
                    }}
                  />
                  <AvatarFallback className="bg-gold-light/20 text-gold-DEFAULT">
                    {currentTestimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gold-light">{currentTestimonial.name}</h4>
                  <p className="text-sm text-white/70">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 transition-all ${
                  index === currentIndex ? 'bg-gold-DEFAULT w-6' : 'bg-gold-DEFAULT/30 w-2.5'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="h-10 w-10 rounded-full border border-gold-light/30 flex items-center justify-center hover:bg-gold-DEFAULT/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gold-light" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="h-10 w-10 rounded-full border border-gold-light/30 flex items-center justify-center hover:bg-gold-DEFAULT/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gold-light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
