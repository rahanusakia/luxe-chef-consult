
import { Award, Star, Crown, Clock, MapPin, GraduationCap } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-gold-light/30 shadow-lg max-w-md mx-auto">
              <div className="h-full w-full bg-gradient-to-br from-gold-light/20 to-gold-DEFAULT/30 p-6 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-playfair text-chef-dark font-bold text-center mb-4 gold-underline">Culinary Journey</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-chef-dark">30+ Years of Excellence</h4>
                      <p className="text-sm text-chef-dark/70">Crafting culinary innovations since 1993</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-chef-dark">Global Experience</h4>
                      <p className="text-sm text-chef-dark/70">Projects across 4 continents & 27 countries</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-chef-dark">Master Training</h4>
                      <p className="text-sm text-chef-dark/70">Mentored over 200 Michelin-level chefs</p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="inline-block px-4 py-2 bg-gold-DEFAULT/20 rounded-full text-gold-dark text-sm font-semibold">
                      Elevating Culinary Arts Since 1993
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-chef-dark mb-6">Culinary Excellence & Business Success</h3>
            <p className="mb-6 text-chef-dark/80">
              Founded by Master Chef David Cailleba with over 30 years of experience in 
              Michelin-starred restaurants across Europe and Asia, LuxeChef Consultancy bridges the 
              gap between culinary artistry and business profitability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 bg-white/50 p-4 rounded-lg border border-gold-DEFAULT/20">
              <Avatar className="h-20 w-20 border-2 border-gold-DEFAULT shadow-lg flex-shrink-0">
                <AvatarImage src="/lovable-uploads/c255526a-7499-4a0c-afe6-5728e9df1691.png" alt="Master Chef David Cailleba" />
                <AvatarFallback className="bg-gold-light text-chef-dark text-xl">DC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-xl font-playfair text-chef-dark font-semibold">Master Chef David Cailleba</h4>
                <p className="text-gold-dark italic">Founder & Executive Consultant</p>
                <div className="h-0.5 w-12 bg-gold-DEFAULT/50 my-2"></div>
                <p className="text-chef-dark/80">
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
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg border border-gold-DEFAULT/20 hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-full bg-gold-light/30 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-chef-dark">Award-Winning</h4>
                <p className="text-sm text-chef-dark/70">25+ Industry Awards</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg border border-gold-DEFAULT/20 hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-full bg-gold-light/30 flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-gold-dark" />
                </div>
                <h4 className="font-semibold text-chef-dark">Experienced</h4>
                <p className="text-sm text-chef-dark/70">30+ Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg border border-gold-DEFAULT/20 hover:shadow-md transition-shadow">
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
