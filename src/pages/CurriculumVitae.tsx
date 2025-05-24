import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Star, Languages, ChefHat } from "lucide-react";
const CurriculumVitae = () => {
  return <PageLayout>
      <PageHeader title="Curriculum Vitae" backgroundImage="/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png" breadcrumbs={[{
      label: "Home",
      href: "/"
    }, {
      label: "CV",
      href: "/cv",
      isCurrent: true
    }]} />
      
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="overflow-hidden border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                  <div className="aspect-square relative overflow-hidden">
                    <img src="/lovable-uploads/447d23ff-3be3-4464-b6ff-811dd4f764d6.png" alt="Chef David Cailleba" className="object-cover w-full h-full" />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">David Cailleba</h2>
                    <p className="text-gold-light font-medium mb-4">Executive Chef Consultant</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Contact</h3>
                        <div className="text-white/80 space-y-1 text-sm">
                          <p>Email: davidcailleba4@gmail.com</p>
                          <p>Phone: +62 822-7350-7458</p>
                          <p>Location: Bali, Indonesia</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">English</Badge>
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">French</Badge>
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">Indonesian</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-white/60 mb-2">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">Fine Dining</Badge>
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">French Cuisine</Badge>
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">Menu Development</Badge>
                          <Badge variant="outline" className="bg-gold-DEFAULT/10 text-gold-light border-gold-DEFAULT/30">Staff Training</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8 bg-neutral-900">
                  <TabsTrigger value="experience" className="data-[state=active]:bg-gold-DEFAULT data-[state=active]:text-slate-100">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Experience
                  </TabsTrigger>
                  <TabsTrigger value="education" className="data-[state=active]:bg-gold-DEFAULT data-[state=active]:text-slate-100">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Education
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="data-[state=active]:bg-gold-DEFAULT data-[state=active]:text-slate-100">
                    <ChefHat className="h-4 w-4 mr-2" />
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="awards" className="data-[state=active]:bg-gold-DEFAULT data-[state=active]:text-slate-100">
                    <Award className="h-4 w-4 mr-2" />
                    Awards
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="experience" className="space-y-8">
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">Executive Chef Consultant</h3>
                        <Badge className="bg-gold-DEFAULT text-chef-dark">2018 - Present</Badge>
                      </div>
                      <p className="text-gold-light mb-4">LuxeChef Consultancy, Bali, Indonesia</p>
                      <p className="text-white/80 mb-4">
                        Providing expert culinary consultation to high-end restaurants, hotels, and resorts across Southeast Asia. 
                        Specializing in menu development, kitchen operations optimization, and staff training.
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        <li>Developed over 200 signature dishes for various establishments</li>
                        <li>Trained more than 50 kitchen teams in fine dining techniques</li>
                        <li>Implemented efficient kitchen workflows reducing operational costs by 25%</li>
                        <li>Consulted for 15+ Michelin-standard restaurants</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">Head Chef</h3>
                        <Badge className="bg-gold-DEFAULT text-chef-dark">2012 - 2018</Badge>
                      </div>
                      <p className="text-gold-light mb-4">Le Petit Jardin, Paris, France</p>
                      <p className="text-white/80 mb-4">
                        Led a team of 15 chefs at this renowned 2-Michelin star restaurant, overseeing all culinary operations
                        and menu development.
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        <li>Maintained 2 Michelin stars for 6 consecutive years</li>
                        <li>Created seasonal tasting menus featuring innovative French cuisine</li>
                        <li>Mentored 8 sous chefs who went on to lead their own Michelin-starred kitchens</li>
                        <li>Increased restaurant revenue by 40% through menu innovation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">Sous Chef</h3>
                        <Badge className="bg-gold-DEFAULT text-chef-dark">2008 - 2012</Badge>
                      </div>
                      <p className="text-gold-light mb-4">L'Atelier de Joël Robuchon, London, UK</p>
                      <p className="text-white/80 mb-4">
                        Worked directly under Joël Robuchon in this 3-Michelin star establishment, focusing on
                        precision cooking and innovative techniques.
                      </p>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        <li>Assisted in maintaining the restaurant's 3 Michelin stars</li>
                        <li>Specialized in sauce preparation and meat cookery</li>
                        <li>Trained junior chefs in classic French techniques</li>
                        <li>Contributed to the development of 30+ signature dishes</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="education" className="space-y-8">
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">Advanced Culinary Arts Diploma</h3>
                        <Badge className="bg-gold-DEFAULT text-chef-dark">2006 - 2008</Badge>
                      </div>
                      <p className="text-gold-light mb-4">Le Cordon Bleu, Paris, France</p>
                      <p className="text-white/80">
                        Completed the prestigious Grand Diplôme, mastering both cuisine and pâtisserie with highest honors.
                        Specialized in classical French techniques and modern culinary innovations.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">Culinary Management</h3>
                        <Badge className="bg-gold-DEFAULT text-chef-dark">2004 - 2006</Badge>
                      </div>
                      <p className="text-gold-light mb-4">École Supérieure de Cuisine Française, Paris, France</p>
                      <p className="text-white/80">
                        Studied restaurant management, food costing, menu planning, and kitchen operations.
                        Graduated with distinction and received the Excellence in Leadership award.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="skills" className="space-y-8">
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">Culinary Expertise</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">French Cuisine</span>
                            <span className="text-gold-light">Expert</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '95%'
                          }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">Menu Development</span>
                            <span className="text-gold-light">Expert</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '90%'
                          }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">Kitchen Management</span>
                            <span className="text-gold-light">Expert</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '95%'
                          }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">Staff Training</span>
                            <span className="text-gold-light">Expert</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '90%'
                          }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">Asian Fusion</span>
                            <span className="text-gold-light">Advanced</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '85%'
                          }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">Molecular Gastronomy</span>
                            <span className="text-gold-light">Advanced</span>
                          </div>
                          <div className="h-2 bg-chef-dark rounded-full">
                            <div className="h-2 bg-gold-DEFAULT rounded-full" style={{
                            width: '80%'
                          }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">Professional Skills</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Team Leadership</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Cost Control</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Inventory Management</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Food Safety & HACCP</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Menu Engineering</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Supplier Negotiations</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Restaurant Consulting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star fill="currentColor" className="h-4 w-4 text-zinc-600" />
                            <span className="text-white">Culinary Innovation</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="awards" className="space-y-8">
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">Awards & Recognition</h3>
                      
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-zinc-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Best Chef of the Year</h4>
                            <p className="text-gold-light">Southeast Asia Culinary Association, 2020</p>
                            <p className="text-white/70 mt-1">
                              Recognized for outstanding contribution to the culinary arts and innovation in Southeast Asian fine dining.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-gold-light" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Michelin Star Maintenance</h4>
                            <p className="text-gold-light">Le Petit Jardin, 2012-2018</p>
                            <p className="text-white/70 mt-1">
                              Successfully maintained 2 Michelin stars for six consecutive years as Head Chef.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-gold-light" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Culinary Innovation Award</h4>
                            <p className="text-gold-light">International Chefs Association, 2016</p>
                            <p className="text-white/70 mt-1">
                              Awarded for pioneering fusion techniques combining French and Southeast Asian flavors.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-gold-light" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">Excellence in Mentorship</h4>
                            <p className="text-gold-light">Global Culinary Academy, 2019</p>
                            <p className="text-white/70 mt-1">
                              Recognized for exceptional commitment to training the next generation of culinary professionals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gold-dark/20 bg-chef-darker/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">Publications & Features</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">The Art of French Fusion</h4>
                          <p className="text-gold-light">Culinary Press, 2019</p>
                          <p className="text-white/70 mt-1">
                            Authored cookbook featuring 120 signature recipes blending French techniques with Asian ingredients.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white">Featured Chef</h4>
                          <p className="text-gold-light">Gourmet Magazine, 2017-2021</p>
                          <p className="text-white/70 mt-1">
                            Regular contributor with a quarterly column on fine dining innovations and techniques.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white">Culinary Masters</h4>
                          <p className="text-gold-light">Netflix Documentary Series, 2020</p>
                          <p className="text-white/70 mt-1">
                            Featured in episode highlighting revolutionary chefs transforming the Asian fine dining scene.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default CurriculumVitae;