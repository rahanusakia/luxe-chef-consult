
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const foodImages = [
    { src: '/lovable-uploads/935ed434-3364-4040-88ec-79d34f722add.png', alt: 'Gourmet vegetable and cheese dish' },
    { src: '/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png', alt: 'Elegant fish with saffron sauce' },
    { src: '/lovable-uploads/a3c21c55-3279-4304-a2fd-cf0eabe212e3.png', alt: 'Exquisite eggs benedict dish' },
    { src: '/lovable-uploads/9a801591-fe5f-4493-91f3-a790dfc59885.png', alt: 'Seafood platter with sauce' },
    { src: '/lovable-uploads/c3a7ed92-9ceb-474f-9233-19a8089f5ede.png', alt: 'Sophisticated dessert with fruit' },
    { src: '/lovable-uploads/88a796a9-6939-418d-9e79-edb6e2df8edc.png', alt: 'Fried calamari with dipping sauces' },
  ];

  return (
    <section id="gallery" className="bg-chef-dark py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Culinary Excellence
        </h2>
        <p className="text-lg text-gold-light font-playfair italic text-center mb-12 max-w-2xl mx-auto">
          Our portfolio of exquisite dishes created with our consulting expertise
        </p>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {foodImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent">
                  <CardContent className="p-1">
                    <AspectRatio ratio={16/9} className="bg-chef-darker/40 rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark border-0" />
            <CarouselNext className="relative static right-0 translate-y-0 bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark border-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
