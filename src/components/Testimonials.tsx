
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LuxeChef Consultancy transformed our restaurant's menu and operations. Our guest satisfaction scores increased by 40% and food costs decreased significantly.",
      name: "Isabella Martinez",
      role: "Owner, Maison Lumière Restaurant",
      image: "/testimonial1.jpg",
      fallbackImage: "https://source.unsplash.com/7YVZYZeITc8"
    },
    {
      quote: "The culinary team training provided by LuxeChef was exceptional. Our chefs now work with greater precision, creativity, and efficiency than ever before.",
      name: "James Robertson",
      role: "Executive Director, The Grand Hotel",
      image: "/testimonial2.jpg",
      fallbackImage: "https://source.unsplash.com/sibVwORYqs0"
    },
    {
      quote: "Their strategic guidance helped us secure our first Michelin star within 18 months of opening. The ROI on their consultancy has been extraordinary.",
      name: "Sophie Chen",
      role: "Founder, Azure Fine Dining",
      image: "/testimonial3.jpg",
      fallbackImage: "https://source.unsplash.com/iFgRcqHznqg"
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
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = currentTestimonial.fallbackImage;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gold-light">{currentTestimonial.name}</h4>
                  <p className="text-sm text-white/70">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold-DEFAULT w-6' : 'bg-gold-DEFAULT/30'
                }`}
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
