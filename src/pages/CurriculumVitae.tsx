
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChefHat, Calendar, Award, School, Briefcase } from "lucide-react";

const CurriculumVitae = () => {
  return (
    <div className="bg-chef-dark min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6 animate-fade-in">
            <div className="h-16 w-16 rounded-full bg-gold-dark/40 flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-gold-light" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Curriculum <span className="text-gold-light">Vitae</span>
          </h1>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold-light font-playfair">David Cailleba</h2>
              <p className="text-xl mb-4 italic text-white/90">Executive Chef Consultant</p>
              <p className="mb-6 text-white/80">
                Highly accomplished Executive Chef with over 25 years of experience in prestigious 
                establishments worldwide. Specialized in French haute cuisine with extensive 
                knowledge of international culinary traditions. Recognized for innovative menu 
                development, operational excellence, and training world-class culinary teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                  Culinary Management
                </span>
                <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                  Menu Development
                </span>
                <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                  Staff Training
                </span>
                <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                  French Cuisine
                </span>
                <span className="px-4 py-2 bg-gold-DEFAULT/20 border border-gold-light/30 rounded-full text-gold-light text-sm">
                  Restaurant Operations
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CV Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
              <div className="flex items-center mb-6">
                <School className="h-6 w-6 text-gold-light mr-3" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <ScrollArea className="h-[300px] rounded-md pr-4">
                <div className="space-y-6">
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Le Cordon Bleu, Paris</h3>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 1989 - 1991
                    </p>
                    <p className="text-white">Grand Diplôme in Culinary Arts and Pastry</p>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Ecole Supérieure de Cuisine Française, Paris</h3>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 1988 - 1989
                    </p>
                    <p className="text-white">Foundation Culinary Program</p>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Institute of Hospitality Management, Lyon</h3>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 1992 - 1993
                    </p>
                    <p className="text-white">Advanced Certificate in Culinary Management</p>
                  </div>
                </div>
              </ScrollArea>
            </div>
            
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
                    <h3 className="text-gold-light font-bold text-lg">Executive Chef Consultant</h3>
                    <p className="text-white/90 mb-1">LuxeChef Consultancy</p>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 2017 - Present
                    </p>
                    <ul className="text-white/80 list-disc ml-5 space-y-2">
                      <li>Founded culinary consulting firm serving high-end restaurants and hotels globally</li>
                      <li>Provided expert menu development for over 30 Michelin-starred establishments</li>
                      <li>Designed efficient kitchen workflows increasing operational efficiency by 30%</li>
                      <li>Developed training programs for culinary teams of 5-star hospitality brands</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Executive Chef</h3>
                    <p className="text-white/90 mb-1">Le Ciel Bleu, Paris</p>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 2010 - 2017
                    </p>
                    <ul className="text-white/80 list-disc ml-5 space-y-2">
                      <li>Led culinary team of 35 staff at 2 Michelin-starred restaurant</li>
                      <li>Developed innovative seasonal menus celebrating regional French produce</li>
                      <li>Established supplier relationships with premier local farmers and producers</li>
                      <li>Oversaw €3M annual food operations budget with consistent profitability</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Head Chef</h3>
                    <p className="text-white/90 mb-1">The Grandeur, London</p>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 2005 - 2010
                    </p>
                    <ul className="text-white/80 list-disc ml-5 space-y-2">
                      <li>Managed kitchen operations for 5-star hotel's flagship restaurant</li>
                      <li>Led team to earn first Michelin star within 2 years of opening</li>
                      <li>Created signature French-British fusion cuisine concept</li>
                      <li>Mentored 12 sous chefs who went on to head chef positions</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                    <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-2"></div>
                    <h3 className="text-gold-light font-bold text-lg">Sous Chef</h3>
                    <p className="text-white/90 mb-1">L'Etoile du Nord, New York</p>
                    <p className="text-white/70 flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" /> 2000 - 2005
                    </p>
                    <ul className="text-white/80 list-disc ml-5 space-y-2">
                      <li>Second-in-command in 3 Michelin-starred French restaurant</li>
                      <li>Supervised team of 22 chefs across 5 kitchen stations</li>
                      <li>Led daily pre-service briefings and quality control procedures</li>
                      <li>Developed new menu items that became signature restaurant dishes</li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Awards */}
            <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-gold-light mr-3" />
                <h2 className="text-2xl font-bold text-white">Awards</h2>
              </div>
              <div className="space-y-5">
                <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-gold-light font-bold">Chef of the Year</h3>
                  <p className="text-white/70">International Culinary Federation, 2016</p>
                </div>
                
                <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-gold-light font-bold">Best Innovation in French Cuisine</h3>
                  <p className="text-white/70">Gourmet Excellence Awards, 2014</p>
                </div>
                
                <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-gold-light font-bold">Michelin Star Achievement</h3>
                  <p className="text-white/70">Le Ciel Bleu (2 stars), 2011-2017</p>
                </div>
                
                <div className="border-l-2 border-gold-DEFAULT pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gold-DEFAULT rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-gold-light font-bold">Michelin Star Achievement</h3>
                  <p className="text-white/70">The Grandeur (1 star), 2007-2010</p>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6">Expertise</h2>
              <Table>
                <TableHeader>
                  <TableRow className="border-gold-dark/30">
                    <TableHead className="text-gold-light">Skill</TableHead>
                    <TableHead className="text-gold-light text-right">Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">French Haute Cuisine</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">Molecular Gastronomy</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-gold-DEFAULT' : 'bg-gold-DEFAULT/30'}`}></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">Kitchen Management</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">Menu Development</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">Wine Pairing</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-gold-DEFAULT' : 'bg-gold-DEFAULT/30'}`}></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gold-dark/30">
                    <TableCell className="text-white">Staff Training</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-gold-DEFAULT"></div>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Languages */}
            <div className="bg-chef-darker/80 border border-gold-dark/30 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">French</span>
                    <span className="text-gold-light">Native</span>
                  </div>
                  <div className="w-full bg-chef-dark rounded-full h-2">
                    <div className="bg-gold-DEFAULT h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">English</span>
                    <span className="text-gold-light">Fluent</span>
                  </div>
                  <div className="w-full bg-chef-dark rounded-full h-2">
                    <div className="bg-gold-DEFAULT h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Italian</span>
                    <span className="text-gold-light">Advanced</span>
                  </div>
                  <div className="w-full bg-chef-dark rounded-full h-2">
                    <div className="bg-gold-DEFAULT h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Spanish</span>
                    <span className="text-gold-light">Intermediate</span>
                  </div>
                  <div className="w-full bg-chef-dark rounded-full h-2">
                    <div className="bg-gold-DEFAULT h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
