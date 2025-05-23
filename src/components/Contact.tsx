import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message
    const phoneNumber = "+6282273507458";
    let message = `Hello, my name is ${formData.name}.\n`;
    if (formData.business) message += `Business: ${formData.business}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    if (formData.phone) message += `Phone: ${formData.phone}\n`;
    message += `\nMessage: ${formData.message}`;
    
    // Show success toast
    toast({
      title: "Inquiry Received",
      description: "Redirecting you to WhatsApp to complete your inquiry.",
    });
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-chef-darker py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 gold-underline">Contact Us</h2>
          <p className="text-white/70 max-w-3xl mx-auto mt-8">
            Ready to elevate your culinary business? Our consultants are available for an initial 
            discussion about your specific needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <p className="mb-8 text-white/70">
              Complete the form and we'll be in touch within 24 hours to schedule your initial consultation. 
              We look forward to understanding your vision and requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold-light" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Our Location</h4>
                  <p className="text-white/70">121 Gourmet Avenue, Culinary District</p>
                  <p className="text-white/70">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold-light" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone & WhatsApp</h4>
                  <p className="text-white/70">+62 822-7350-7458</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gold-light" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white/70">davidcailleba4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-DEFAULT/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold-light" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Business Hours</h4>
                  <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-chef-dark p-8 rounded-lg shadow-md border border-gold-DEFAULT/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-white/10 bg-chef-darker focus:border-gold-DEFAULT focus:ring-gold-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-white/10 bg-chef-darker focus:border-gold-DEFAULT focus:ring-gold-light"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-white/10 bg-chef-darker focus:border-gold-DEFAULT focus:ring-gold-light"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-white mb-2">
                    Business Name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="border-white/10 bg-chef-darker focus:border-gold-DEFAULT focus:ring-gold-light"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-white/10 bg-chef-darker focus:border-gold-DEFAULT focus:ring-gold-light min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-chef-dark hover:bg-chef-darker text-gold-light font-semibold border border-gold-light">
                Submit Inquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
