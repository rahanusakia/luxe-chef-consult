
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
    // Here would typically be the API call to send the form
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Inquiry Received",
      description: "Thank you for contacting LuxeChef Consultancy. We will be in touch shortly.",
    });
    
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
    <section id="contact" className="section-padding bg-chef-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-chef-dark mb-4 gold-underline">Contact Us</h2>
          <p className="text-chef-dark/70 max-w-3xl mx-auto mt-8">
            Ready to elevate your culinary business? Our consultants are available for an initial 
            discussion about your specific needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-chef-dark mb-6">Get in Touch</h3>
            <p className="mb-8 text-chef-dark/80">
              Complete the form and we'll be in touch within 24 hours to schedule your initial consultation. 
              We look forward to understanding your vision and requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-chef-dark">Our Location</h4>
                  <p className="text-chef-dark/70">121 Gourmet Avenue, Culinary District</p>
                  <p className="text-chef-dark/70">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-chef-dark">Phone</h4>
                  <p className="text-chef-dark/70">+1 (212) 555-8790</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-chef-dark">Email</h4>
                  <p className="text-chef-dark/70">contact@luxechef.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-gold-light/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-chef-dark">Business Hours</h4>
                  <p className="text-chef-dark/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chef-dark mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-chef-dark/20 focus:border-gold-dark focus:ring-gold-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chef-dark mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-chef-dark/20 focus:border-gold-dark focus:ring-gold-light"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-chef-dark mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-chef-dark/20 focus:border-gold-dark focus:ring-gold-light"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-chef-dark mb-2">
                    Business Name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="border-chef-dark/20 focus:border-gold-dark focus:ring-gold-light"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-chef-dark mb-2">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-chef-dark/20 focus:border-gold-dark focus:ring-gold-light min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
