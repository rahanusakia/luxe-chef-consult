
import { Check, CreditCard, DollarSign, CalendarDays, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";

const ConsultantFee = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Consultant Fee"
        backgroundImage="/lovable-uploads/c244efb4-5e35-41c7-9516-0edfc42dc521.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Consultant Fee", href: "/consultant-fee", isCurrent: true }
        ]}
      />
      
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Fee Details Card */}
          <Card className="mb-12 shadow-lg border-gold-dark/20 overflow-hidden bg-chef-darker/80 border-gold-dark/30 backdrop-blur-sm animate-fade-in">
            <CardHeader className="bg-chef-dark text-white py-6 px-8 border-b border-gold-dark/30">
              <h2 className="text-3xl font-playfair font-semibold">
                Consultant Fee Details
              </h2>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 bg-chef-dark rounded-lg border border-gold-dark/10">
                  <DollarSign className="h-10 w-10 text-gold-light mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2 text-white">Fee</h3>
                  <p className="text-lg font-semibold text-gold-light">Rp 20.000.000</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-chef-dark rounded-lg border border-gold-dark/10">
                  <CalendarDays className="h-10 w-10 text-gold-light mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2 text-white">Duration</h3>
                  <p className="text-lg font-semibold text-white">12 Days</p>
                  <p className="text-sm text-gray-400">(Sunday Off)</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-chef-dark rounded-lg border border-gold-dark/10">
                  <Clock className="h-10 w-10 text-gold-light mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2 text-white">Daily Hours</h3>
                  <p className="text-lg font-semibold text-white">4 Hours</p>
                  <p className="text-sm text-gray-400">2 Food Items Training</p>
                </div>
              </div>

              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Terms & Conditions</h3>
              <ul className="space-y-3 mb-8">
                {["20 items of menu/Rp 1.000.000 per item menu (all type of food)", "Training will occur every day during 12 days, with Sundays as days off", "4 hours per day with 2 food items training daily", "Includes meals allowance during training", "For extra day training: Additional charge at Rp 1.000.000/day (4 hours)", "Other Menu / Warranty / Substitution: Depending on the deal site", "If training occurs outside of Bali Area: Extra charges apply for flight tickets (return), accommodation & meals"].map((item, index) => <li key={index} className="flex items-start gap-3 text-white/80">
                    <div className="h-6 w-6 rounded-full bg-gold-DEFAULT/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-gold-light" strokeWidth={2} />
                    </div>
                    <span>{item}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>

          {/* Payment Method Card */}
          <Card className="mb-12 shadow-lg border-gold-dark/20 overflow-hidden bg-chef-darker/80 border-gold-dark/30 backdrop-blur-sm animate-fade-in">
            <CardHeader className="bg-chef-dark text-white py-6 px-8 border-b border-gold-dark/30">
              <h2 className="text-3xl font-playfair font-semibold">
                Payment Method
              </h2>
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Payment Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-chef-dark p-6 rounded-lg border border-gold-dark/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center">
                      <span className="font-bold text-amber-200">1</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Period I</h4>
                  </div>
                  <p className="pl-11 text-white/80">Down Payment (DP) 50% paid at the beginning</p>
                </div>
                <div className="bg-chef-dark p-6 rounded-lg border border-gold-dark/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-gold-DEFAULT/20 flex items-center justify-center">
                      <span className="font-bold text-amber-200">2</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white">Period II</h4>
                  </div>
                  <p className="pl-11 text-white/80">Repayment 50% upon completion</p>
                </div>
              </div>

              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Bank Details</h3>
              <div className="bg-chef-dark p-6 rounded-lg border border-gold-dark/10 mb-8">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium w-1/3 py-3 border-b border-gold-dark/10 text-white">Bank Name</TableCell>
                      <TableCell className="py-3 border-b border-gold-dark/10 text-white/80">BCA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium w-1/3 py-3 border-b border-gold-dark/10 text-white">Account Number</TableCell>
                      <TableCell className="py-3 border-b border-gold-dark/10 text-white/80">4040471273</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium w-1/3 py-3 border-b border-gold-dark/10 text-white">Account Name</TableCell>
                      <TableCell className="py-3 border-b border-gold-dark/10 text-white/80">David Cailleba</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium w-1/3 py-3 border-b border-gold-dark/10 text-white">Phone/WhatsApp</TableCell>
                      <TableCell className="py-3 border-b border-gold-dark/10 text-white/80">+6282273507458</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium w-1/3 py-3 text-white">Email</TableCell>
                      <TableCell className="py-3 text-white/80">davidcailleba4@gmail.com</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="bg-gold-light/10 border border-gold-DEFAULT/20 p-5 rounded-lg text-center">
                <p className="text-white/90 font-medium">
                  Note: Any different consultations customized by request will be charged different fees.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Link to="/contact" className="bg-gold-light hover:bg-gold-dark text-chef-dark font-medium px-8 py-3 
                        rounded shadow-lg shadow-gold-DEFAULT/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <CreditCard size={18} className="text-chef-dark" />
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConsultantFee;
