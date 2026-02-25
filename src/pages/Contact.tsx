import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We're here to help plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="gradient-card p-6 rounded-xl shadow-soft hover-lift text-center animate-fade-in">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:7659987391" className="text-primary hover:underline block">
                76599 87391
              </a>
              <a href="tel:8919221454" className="text-primary hover:underline block">
                89192 21454
              </a>
              <a href="tel:6300699442" className="text-primary hover:underline block">
                63006 99442
              </a>
              <a href="tel:9573853162" className="text-primary hover:underline block">
                95738 53162
              </a>
            </div>

            {/* WhatsApp */}
            <div
              className="gradient-card p-6 rounded-xl shadow-soft hover-lift text-center animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/917659987391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Chat with us
              </a>
            </div>

            {/* Email */}
            <div
              className="gradient-card p-6 rounded-xl shadow-soft hover-lift text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:trinethratravelhub04@gmail.com"
                className="text-primary hover:underline"
              >
                trinethratravelhub04@gmail.com
              </a>
            </div>

            {/* Location */}
            <div
              className="gradient-card p-6 rounded-xl shadow-soft hover-lift text-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Visakhapatnam
                <br />
                Andhra Pradesh
              </p>
            </div>
          </div>

          {/* Business Hours & CTA */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="gradient-card p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Business Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Emergency Support</span>
                  <span className="text-primary font-medium">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="gradient-card p-8 rounded-2xl shadow-medium">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <a
                  href="tel:7659987391"
                  className="block w-full gradient-hero text-primary-foreground px-6 py-4 rounded-lg font-semibold text-center hover-lift shadow-soft"
                >
                  <Phone className="inline mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917659987391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold text-center hover-lift shadow-soft"
                >
                  <MessageCircle className="inline mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
                <a
                  href="mailto:trinethratravelhub04@gmail.com"
                  className="block w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-semibold text-center hover-lift shadow-soft"
                >
                  <Mail className="inline mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 gradient-card p-8 rounded-2xl shadow-medium">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.7846288912133!2d83.3318278743968!3d17.754784292118785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395da25e5b13dd%3A0x7467ab2d01c27430!2sVR%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1767766185697!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VR Tours & Travels Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
