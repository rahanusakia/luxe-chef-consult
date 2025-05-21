
import { useState, useEffect, useCallback } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useEmblaCarousel from 'embla-carousel-react';

const Gallery = () => {
  const [mainCarouselApi, setMainCarouselApi] = useState<any>(null);
  const [thumbCarouselApi, setThumbCarouselApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const foodImages = [
    { src: '/lovable-uploads/935ed434-3364-4040-88ec-79d34f722add.png', alt: 'Gourmet vegetable and cheese dish' },
    { src: '/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png', alt: 'Elegant fish with saffron sauce' },
    { src: '/lovable-uploads/a3c21c55-3279-4304-a2fd-cf0eabe212e3.png', alt: 'Exquisite eggs benedict dish' },
    { src: '/lovable-uploads/9a801591-fe5f-4493-91f3-a790dfc59885.png', alt: 'Seafood platter with sauce' },
    { src: '/lovable-uploads/c3a7ed92-9ceb-474f-9233-19a8089f5ede.png', alt: 'Sophisticated dessert with fruit' },
    { src: '/lovable-uploads/88a796a9-6939-418d-9e79-edb6e2df8edc.png', alt: 'Fried calamari with dipping sauces' },
  ];

  const autoPlay = useCallback(() => {
    if (!emblaMainApi) return;
    
    const autoPlayTimer = setInterval(() => {
      if (!emblaMainApi.canScrollNext()) {
        emblaMainApi.scrollTo(0);
      } else {
        emblaMainApi.scrollNext();
      }
    }, 4000);

    return () => {
      clearInterval(autoPlayTimer);
    };
  }, [emblaMainApi]);
  
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    const cleanup = autoPlay();
    return () => {
      emblaMainApi.off("select", onSelect);
      if (cleanup) cleanup();
    };
  }, [emblaMainApi, onSelect, autoPlay]);

  return (
    <section id="gallery" className="bg-chef-dark py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Culinary Excellence
        </h2>
        <p className="text-lg text-gold-light font-playfair italic text-center mb-12 max-w-2xl mx-auto">
          Our portfolio of exquisite dishes created with our consulting expertise
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden" ref={mainViewportRef}>
            <div className="flex">
              {foodImages.map((image, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={16/9} className="bg-chef-darker/40 rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Carousel */}
          <div className="mt-4">
            <div className="overflow-hidden" ref={thumbViewportRef}>
              <div className="flex gap-2">
                {foodImages.map((image, index) => (
                  <div 
                    className={`flex-[0_0_18%] min-w-0 cursor-pointer transition-opacity duration-300 ${selectedIndex === index ? 'opacity-100 ring-2 ring-gold-light' : 'opacity-70'}`}
                    key={index}
                    onClick={() => onThumbClick(index)}
                  >
                    <AspectRatio ratio={16/9} className="bg-chef-darker rounded-md overflow-hidden">
                      <img
                        src={image.src}
                        alt={`Thumbnail ${index+1}`}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button 
              onClick={() => emblaMainApi?.scrollPrev()}
              className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
              aria-label="Previous"
            >
              ←
            </button>
            <button 
              onClick={() => emblaMainApi?.scrollNext()}
              className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
