import { Utensils, Award, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Services = () => {
  const services = [{
    icon: <Utensils className="h-10 w-10 text-zinc-600" />,
    title: "Menu Development & Innovation",
    description: "Craft distinctive, profitable menus that balance creativity with market demands and operational capabilities. We analyze food costs, ingredient availability, and culinary trends."
  }, {
    icon: <Award className="h-10 w-10 text-zinc-600" />,
    title: "Culinary Team Training",
    description: "Elevate your kitchen team's skills with personalized training programs focusing on technique refinement, consistency, efficiency, and modern culinary approaches."
  }, {
    icon: <Briefcase className="h-10 w-10 text-zinc-600" />,
    title: "Operational Excellence",
    description: "Optimize your kitchen workflow, inventory management, and quality control systems to ensure seamless service, reduce waste, and increase profitability."
  }, {
    icon: <Calendar className="h-10 w-10 text-zinc-600" />,
    title: "Strategic Culinary Planning",
    description: "Develop long-term culinary strategies aligned with your brand vision, market positioning, and business objectives for sustainable growth and reputation building."
  }];
  return <section id="services" className="section-padding bg-chef-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-underline">Our Services</h2>
          <p className="text-white/70 max-w-3xl mx-auto mt-8">
            We provide comprehensive culinary consultancy services tailored to elevate your gastronomic 
            business to new heights of excellence and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="bg-chef-darker border-gold-dark/30 hover:border-gold-DEFAULT transition-all duration-300 transform hover:translate-y-[-5px]">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-gold-light text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-chef-darker to-chef-dark border border-gold-dark/30 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gold-light mb-4">Tailored Solutions for Culinary Excellence</h3>
              <p className="text-white/80 mb-6">
                Every gastronomic business has unique challenges and opportunities. Our approach is always 
                customized to your specific needs, goals, and market positioning.
              </p>
              <ul className="space-y-3">
                {["Personalized consultation sessions", "Comprehensive situation analysis", "Detailed improvement strategy", "Hands-on implementation support", "Ongoing progress evaluation"].map((item, index) => <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-gold-DEFAULT rounded-full"></div>
                    <span className="text-white/90">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-gold-dark/20 transform hover:scale-[1.02] transition-all duration-500">
              <img src="/lovable-uploads/b756b57d-9265-4f42-8c36-eb308c72a6d1.png" alt="Chef preparing gourmet meal in professional kitchen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;