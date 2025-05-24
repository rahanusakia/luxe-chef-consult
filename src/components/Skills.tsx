
import { ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "Able to cook a variety of different dishes including French, Mediterranean, Spanish and foreign dishes",
    "Awareness of health and hygiene requirements",
    "Experience of restaurants, hotels, and pub-style food production",
    "A good track record of achieving and consistently maintaining target gross profit percentage"
  ];
  
  return (
    <section className="py-24 bg-chef-darker/90 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="h-16 w-16 rounded-full bg-gold-DEFAULT/40 flex items-center justify-center mb-4">
            <ChefHat className="h-9 w-9 text-gold-light" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            Key Skills and <span className="text-gold-light">Competencies</span>
          </h2>
          <div className="w-24 h-1 bg-gold-DEFAULT rounded-full"></div>
        </div>
        
        <Card className="bg-transparent border-0 shadow-none backdrop-blur-none max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 fade-in-up bg-transparent"
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/40 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold-light font-bold text-xl">{index + 1}</span>
                  </div>
                  <p className="text-white text-lg md:text-xl font-medium pt-2">{skill}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decorative background element - increased opacity for better visibility */}
      <div 
        style={{
          backgroundImage: 'url("/lovable-uploads/6fa56379-4b02-4aca-92d4-3c1bdceec894.png")'
        }} 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
      />
    </section>
  );
};

export default Skills;
