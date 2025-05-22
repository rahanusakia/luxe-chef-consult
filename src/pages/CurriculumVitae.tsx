import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChefHat, Calendar, Award, School, Briefcase, Phone, Mail, MapPin, Link, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CurriculumVitae = () => {
  const [activeCategory, setActiveCategory] = useState<string>("kitchen");
  
  const dutyCategories = {
    kitchen: [
      "Responsible for the operational management of the kitchen.",
      "Making sure that all health and safety requirements are met.",
      "In charge of the cooking, preparation and serving of meals and refreshments.",
      "Keeping the kitchen organized, ensuring utensils are placed in the correct place.",
      "Ensuring the kitchen is a safe environment to work in.",
      "Advising new cooking techniques and equipment to kitchen staff.",
      "Carry out the preparatory work for creating dishes.",
      "Cooking, breakfast, lunch and evening meals"
    ],
    food: [
      "Checking food items on delivery and tidy them into cold storage.",
      "Prepare and present dishes so they are ready for guests at the right time.",
      "Ensure all the food produced is of the very highest standard and delicious.",
      "Serving classic French food and modern European cuisine.",
      "Responsible for food stock control, ordering high quality vegetables and meat.",
      "Preparing food for both public visitors and private event guests i.e. weddings etc.",
      "Introducing & developing new dishes & measuring consistency and performance.",
      "Meal preparation and menu planning.",
      "Ensuring the kitchen is maintained and cleaned to the highest level."
    ]
  };

  return (
    <div className="bg-chef-dark min-h-screen">
      <Navbar />
      
      {/* Page Header - Added to match other pages */}
      <div 
        className="relative bg-cover bg-center py-28" 
        style={{ backgroundImage: 'url("/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-chef-darker/95 to-chef-darker/90"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Curriculum <span className="text-gold-light">Vitae</span>
          </h1>
          <div className="flex items-center justify-center text-sm md:text-base text-white/80 space-x-2">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <ArrowRight size={14} className="text-gold-light" />
            <span className="text-gold-light">Curriculum Vitae</span>
          </div>
        </div>
      </div>
      
      <div className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          {/* Header - Modified to reduce vertical space since we have the page header now */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6 animate-fade-in">
              <div className="h-16 w-16 rounded-full bg-gold-dark/40 flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-gold-light" />
              </div>
            </div>
            <p className="text-xl text-gold-light font-playfair italic mb-4 max-w-3xl mx-auto animate-fade-in">
              The Professional Journey of David Cailleba
            </p>
            <div className="h-1 w-24 bg-gold-DEFAULT mx-auto"></div>
          </div>

          {/* Profile Overview */}
          <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 md:p-10 mb-12 backdrop-blur-sm animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="rounded-full overflow-hidden border-4 border-gold-DEFAULT/50 shadow-lg shadow-gold-DEFAULT/20 h-56 w-56">
                  <img 
                    src="/lovable-uploads/b756b57d-9265-4f42-8c36-eb308c72a6d1.png" 
                    alt="David Cailleba" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold-light font-playfair">David Claude Cailleba</h2>
                <p className="text-xl mb-4 italic text-white/90">Executive Chef Consultant</p>
                <div className="mb-6 space-y-3 text-white/80">
                  <p>
                    With 28+ years of professional Executive Chef experience, I offer my expertise as an Executive Chef / 
                    Consultant Chef for hotels, resorts, and free-standing restaurant businesses.
                  </p>
                  <p>
                    If you're looking to improve overall performance, increase revenues with lower costs, and build a professionally 
                    trained, highly motivated workforce, you should contact me immediately.
                  </p>
                  <p>
                    As an Executive Chef specialist with proven capabilities of turning businesses around, I can help with quality 
                    assurance, staff training and development, HACCP implementation, and equipment planning.
                  </p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gold-light" />
                    <span className="text-white/80">Jalan Gunung Wayang Bale residence no.19, Kerobokan Denpasar Bali</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gold-light" />
                    <span className="text-white/80">(+62) 82273507458</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gold-light" />
                    <span className="text-white/80">davidcailleba4@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link className="h-5 w-5 text-gold-light" />
                    <span className="text-white/80">www.konsultanchef.com</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                    French Cuisine
                  </span>
                  <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                    Italian Cuisine
                  </span>
                  <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                    Spanish Cuisine
                  </span>
                  <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                    Asian Cuisine
                  </span>
                  <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                    Staff Training
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Personal Info Card */}
          <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 mb-8 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gold-dark/30 flex items-center justify-center mr-4">
                <ChefHat className="h-5 w-5 text-gold-light" />
              </div>
              <h2 className="text-2xl font-bold text-white">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p><span className="text-gold-light">Date of Birth:</span> <span className="text-white/80">September 4th, 1970</span></p>
                <p><span className="text-gold-light">Place of Birth:</span> <span className="text-white/80">Bayonne, France</span></p>
              </div>
              <div className="space-y-2">
                <p><span className="text-gold-light">Nationality:</span> <span className="text-white/80">France</span></p>
                <p><span className="text-gold-light">Languages:</span> <span className="text-white/80">French, English, Indonesian Bahasa</span></p>
              </div>
            </div>
          </div>
          
          {/* CV Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Work Experience */}
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-gold-light mr-3" />
                  <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
                </div>
                <ScrollArea className="h-[500px] rounded-md pr-4">
                  <div className="space-y-8">
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Executive Chef</h3>
                      <p className="text-white/90 mb-1">La Toc St Lucia (Caribbean island group Sandal's)</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> December 2022 - Present
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>In charge of 9 outlets restaurant and 300 rooms (All-inclusive hotel)</li>
                        <li>Managing and controlling all kitchen operations</li>
                        <li>Overseeing training programs for all F&B staff</li>
                        <li>Creating new food concepts and maintaining food cost control</li>
                        <li>Maintaining standard cooking methods for all recipes</li>
                        <li>Creating new menu designs, concepts, and implementation</li>
                        <li>Supporting General Manager on new projects for the property</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Consultant Chef International</h3>
                      <p className="text-white/90 mb-1">French, Italian, Spanish, and Asian Cuisine</p>
                      <p className="text-white/90 mb-1">Radisson Hotel, Bali Handara Golf and Resorts, Babochkaa Restaurant Jakarta</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> May 2018 - December 2022
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>Maximized productivity of kitchen staff across overall operations</li>
                        <li>Maintained food cost at an average of 31%</li>
                        <li>Created new menus for restaurant and banquet operations</li>
                        <li>Maintained high work, hygiene, and safety standards</li>
                        <li>Tracked kitchen expenses and reported to owners</li>
                        <li>Responsible for kitchen staffing</li>
                        <li>Assisted in creation and quality of food</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Executive Chef</h3>
                      <p className="text-white/90 mb-1">Patra Jasa Hotel (5 Star Resort, 228 Rooms, 4 Outlets)</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> May 2017 - May 2018
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>Managed and controlled a kitchen team of 47 staff members</li>
                        <li>Oversaw training programs for all F&B staff</li>
                        <li>Maintained food cost at an average of 33%</li>
                        <li>Created new menu designs, concepts and implemented them</li>
                        <li>Supported General Manager on new projects</li>
                        <li>Maintained proper hygiene standards and up-to-date files for audit inspections</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Executive Chef</h3>
                      <p className="text-white/90 mb-1">The Seminyak Beach & Resort and Spa, Bali (5 Star Hotel, 108 Suites, 2 Outlets)</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> April 2015 - April 2017
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>Maintained complete control of the kitchen and commanded staff respect</li>
                        <li>Managed the Head Chef, Sous Chef and Chef de Partie</li>
                        <li>Maintained a food cost average of 28%</li>
                        <li>Approved all prepared food items and created new menu items</li>
                        <li>Performed administrative duties including ordering and reporting</li>
                        <li>Responsible for kitchen staffing and maintaining high safety standards</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Executive Chef</h3>
                      <p className="text-white/90 mb-1">The Meridien Hotel managed by Starwood (118 Rooms & 2 outlets)</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> February 2014 - February 2015
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>Planned menus for all food outlets</li>
                        <li>Scheduled and coordinated work of chefs and kitchen staff</li>
                        <li>Maintained high standards of sanitation and safety</li>
                        <li>Established controls to minimize food waste and theft</li>
                        <li>Developed standard recipes and techniques for quality food preparation</li>
                        <li>Maintained a food cost average of 31%</li>
                        <li>Prepared data for budgets and monitored financial results</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                      <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-gold-light font-bold text-lg">Chef de Cuisine</h3>
                      <p className="text-white/90 mb-1">Sogeres Company (operator Alain Ducasse) (France St. Jean de Luz)</p>
                      <p className="text-white/70 flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4" /> January 2013 - January 2014
                      </p>
                      <ul className="text-white/80 list-disc ml-5 space-y-2">
                        <li>Responsible for main kitchen operations</li>
                        <li>Developed kitchen brigade of 65 staff members</li>
                        <li>Maintained food cost at company standards</li>
                        <li>Improved food quality, hygiene and sanitation</li>
                        <li>Assisted purchasing department to find optimal products</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </div>
              
              {/* Duties & Responsibilities Section - NEW SECTION */}
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center mb-6">
                  <ClipboardList className="h-6 w-6 text-gold-light mr-3" />
                  <h2 className="text-2xl font-bold text-white">Duties & Responsibilities</h2>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <Button 
                    variant={activeCategory === "kitchen" ? "default" : "outline"}
                    onClick={() => setActiveCategory("kitchen")}
                    className={`${activeCategory === "kitchen" ? "bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark" : "bg-transparent text-gold-light border-gold-light/30 hover:bg-gold-DEFAULT/10"}`}
                  >
                    Kitchen Management
                  </Button>
                  <Button 
                    variant={activeCategory === "food" ? "default" : "outline"}
                    onClick={() => setActiveCategory("food")}
                    className={`${activeCategory === "food" ? "bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark" : "bg-transparent text-gold-light border-gold-light/30 hover:bg-gold-DEFAULT/10"}`}
                  >
                    Food Preparation & Quality
                  </Button>
                </div>
                
                <Card className="bg-chef-dark/50 border-gold-dark/30 shadow-lg shadow-gold-DEFAULT/5">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {dutyCategories[activeCategory as keyof typeof dutyCategories].map((duty, index) => (
                        <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                          <div className="h-6 w-6 rounded-full bg-gold-DEFAULT/20 border border-gold-DEFAULT/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <span className="text-gold-light text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-white/80">{duty}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Education */}
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center mb-6">
                  <School className="h-6 w-6 text-gold-light mr-3" />
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-gold-light font-bold">Level Diploma in Professional Cookery</h3>
                    <p className="text-white/70 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 1989 - 1992
                    </p>
                    <p className="text-white/80">Chambres des métiers Bayonne</p>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-gold-light font-bold">Apprenticeship with contract</h3>
                    <p className="text-white/70">Plumauzille Catering, Anglet France</p>
                    <p className="text-white/70 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 1989 - 1992
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Awards */}
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="flex items-center mb-6">
                  <Award className="h-6 w-6 text-gold-light mr-3" />
                  <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
                </div>
                <div className="space-y-4">
                  <Card className="bg-chef-dark border-gold-dark/30">
                    <CardContent className="p-4">
                      <h4 className="text-gold-light font-semibold mb-2">Culinary Expertise</h4>
                      <ul className="text-white/80 list-disc ml-5 space-y-1">
                        <li>French Cuisine</li>
                        <li>Italian Cuisine</li>
                        <li>Spanish Cuisine</li>
                        <li>Asian Cuisine</li>
                        <li>Pastry Basics</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-chef-dark border-gold-dark/30">
                    <CardContent className="p-4">
                      <h4 className="text-gold-light font-semibold mb-2">Management</h4>
                      <ul className="text-white/80 list-disc ml-5 space-y-1">
                        <li>Kitchen Operations</li>
                        <li>Staff Training</li>
                        <li>Quality Assurance</li>
                        <li>HACCP Implementation</li>
                        <li>Food Cost Control</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-chef-dark border-gold-dark/30">
                    <CardContent className="p-4">
                      <h4 className="text-gold-light font-semibold mb-2">Languages</h4>
                      <ul className="text-white/80 list-disc ml-5 space-y-1">
                        <li>French (Native)</li>
                        <li>English (Fluent)</li>
                        <li>Indonesian Bahasa (Proficient)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* References */}
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-6">Professional References</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gold-light font-bold">Bali Handara Golf</p>
                    <p className="text-white/80">Owner</p>
                    <p className="text-white/70">Mobile: +628118114555</p>
                    <p className="text-white/70">Email: Salviandra@gmail.com</p>
                  </div>
                  
                  <div>
                    <p className="text-gold-light font-bold">Patra Jasa Hotel</p>
                    <p className="text-white/80">Askar Daeng Kamis (General Manager)</p>
                    <p className="text-white/70">Mobile: +6281803614636</p>
                  </div>
                  
                  <div>
                    <p className="text-gold-light font-bold">The Seminyak Beach and Resorts and Spa</p>
                    <p className="text-white/80">Mister Jos (Owner)</p>
                    <p className="text-white/70">Mobile: +62816507737</p>
                  </div>
                  
                  <div>
                    <p className="text-gold-light font-bold">Bali Mandira Hotel</p>
                    <p className="text-white/80">Pak Agus Pribadi (Owner)</p>
                    <p className="text-white/70">Mobile: +628123842021</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-white/80 italic">Additional references available upon request</p>
                </div>
              </div>
              
              <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to elevate your culinary business?</h3>
                  <Button asChild size="lg" className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark font-medium px-8 
                                                  shadow-lg shadow-gold-DEFAULT/20 transition-all duration-300 transform hover:scale-105">
                    <a href="/#contact">Contact David Cailleba</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CurriculumVitae;
