
import { Award, Star, Crown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding bg-chef-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chef-dark mb-4 gold-underline">About LuxeChef Consultancy</h2>
          <p className="text-chef-dark/70 max-w-3xl mx-auto mt-8">
            We are a team of highly experienced culinary professionals dedicated to enhancing the 
            gastronomic excellence and operational efficiency of fine dining establishments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="/chef-consulting.jpg" 
                alt="Chef consulting with restaurant team" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://source.unsplash.com/9aOswReDKPo';
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-chef-dark mb-6">Culinary Excellence & Business Success</h3>
            <p className="mb-6 text-chef-dark/80">
              Founded by Master Chef David Cailleba with over 30 years of experience in 
              Michelin-starred restaurants across Europe and Asia, LuxeChef Consultancy bridges the 
              gap between culinary artistry and business profitability.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <Avatar className="h-24 w-24 border-2 border-gold-DEFAULT shadow-lg">
                <AvatarImage src="/lovable-uploads/c255526a-7499-4a0c-afe6-5728e9df1691.png" alt="Master Chef David Cailleba" />
                <AvatarFallback className="bg-gold-light text-chef-dark text-xl">DC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-xl font-playfair text-chef-dark font-semibold">Master Chef David Cailleba</h4>
                <p className="text-gold-dark italic">Founder & Executive Consultant</p>
                <p className="text-chef-dark/80 mt-2">
                  "My passion is transforming culinary operations into extraordinary gastronomic experiences."
                </p>
              </div>
            </div>

            <p className="mb-8 text-chef-dark/80">
              Our consultants have led operations in prestigious establishments worldwide, 
              understanding the unique challenges of the fine dining industry and providing 
              tailored solutions that preserve artistic integrity while enhancing business performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-gold-light/30 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-chef-dark">Award-Winning</h4>
                <p className="text-sm text-chef-dark/70">25+ Industry Awards</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-gold-light/30 flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-chef-dark">Experienced</h4>
                <p className="text-sm text-chef-dark/70">30+ Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-gold-light/30 flex items-center justify-center mb-3">
                  <Crown className="h-6 w-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-chef-dark">Elite Network</h4>
                <p className="text-sm text-chef-dark/70">Global Connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
