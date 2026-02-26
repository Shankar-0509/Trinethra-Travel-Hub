import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import HeroSection from "@/components/HeroSection";
import TourImageGallery from "@/components/TourImageGallery";
import { MapPin, Users, Shield, Phone, Clock, IndianRupee, Calendar, MessageSquare, Send, Car, Check, Mail, MessageCircle } from "lucide-react";
import { tourPackages, templeTourPackages, rentalPackages } from "@/data/tourPackages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  pickup: z.string().min(3, "Pickup location is required"),
  date: z.string().min(1, "Travel date is required"),
  package: z.string().min(1, "Please select a package"),
  travelers: z.string().min(1, "Number of travelers is required"),
  requirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Home = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      icon: MapPin,
      title: "Expert Local Guidance",
      description: "Experience the best of Vizag and Araku with our knowledgeable guides",
    },
    {
      icon: Users,
      title: "Comfortable Travel",
      description: "AC vehicles and professional drivers for a pleasant journey",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Your safety is our priority with well-maintained vehicles",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Always available to assist you throughout your journey",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const allPackages = [
    ...tourPackages.map((p) => ({ id: p.id, title: p.title })),
    ...templeTourPackages.map((p) => ({ id: p.id, title: p.title })),
    ...rentalPackages.map((p) => ({
      id: p.id,
      title: `Rental - ${p.duration} (${p.distance})`,
    })),
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    const message = `*New Booking Request*\n\n` +
      `Name: ${data.name}\n` +
      `Mobile: ${data.mobile}\n` +
      `Pickup Location: ${data.pickup}\n` +
      `Travel Date: ${data.date}\n` +
      `Package: ${data.package}\n` +
      `Number of Travelers: ${data.travelers}\n` +
      `${data.requirements ? `Special Requirements: ${data.requirements}\n` : ''}`;
    
    const whatsappUrl = `https://wa.me/917659987391?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking request sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Home Section */}
      <section id="home">
        <HeroSection />

        {/* Introduction Section */}
        <div className="py-20 px-4 bg-gradient-card">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Your Trusted Travel Partner
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trinethra Travel Hub is your gateway to exploring the enchanting beauty of 
              Visakhapatnam and Araku Valley. With years of experience in crafting memorable 
              journeys, we bring you the perfect blend of comfort, safety, and unforgettable 
              experiences. From pristine beaches to misty mountains, ancient temples to modern 
              attractions – we make every journey blessed.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl gradient-card hover-lift shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Tour Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated tour packages designed to give you the best experience
            </p>
          </div>

          <div className="space-y-16">
            {tourPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-hero p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                        {pkg.title}
                      </h3>
                      {pkg.duration && (
                        <div className="flex items-center gap-2 text-primary-foreground/90">
                          <Clock className="h-5 w-5" />
                          <span>{pkg.duration}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-center md:text-right space-y-3">
                      <div className="flex items-center justify-center md:justify-end gap-2 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                        <Users className="h-5 w-5 text-primary-foreground" />
                        <div className="text-left">
                          <div className="flex items-center gap-1 text-2xl font-bold text-primary-foreground">
                            <IndianRupee className="h-5 w-5" />
                            {pkg.price5Seater.toLocaleString()}
                          </div>
                          <p className="text-primary-foreground/80 text-xs">5 Seater</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center md:justify-end gap-2 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                        <Users className="h-5 w-5 text-primary-foreground" />
                        <div className="text-left">
                          <div className="flex items-center gap-1 text-2xl font-bold text-primary-foreground">
                            <IndianRupee className="h-5 w-5" />
                            {pkg.price7Seater.toLocaleString()}
                          </div>
                          <p className="text-primary-foreground/80 text-xs">7 Seater</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Places Covered
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pkg.places.map((place, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-smooth"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{place}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {pkg.images && pkg.images.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-4">Gallery</h4>
                      <TourImageGallery images={pkg.images} />
                    </div>
                  )}

                  <div className="flex justify-center mt-8">
                    <a
                      href="#book"
                      onClick={(e) => {
                        e.preventDefault();
                        setValue("package", pkg.title);
                        const element = document.getElementById("book");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-medium inline-flex items-center gap-2"
                    >
                      <Calendar className="h-5 w-5" />
                      Book This Package
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Temple Tour Packages */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                Temple Tour Packages
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience divine blessings with our specially curated temple tours
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templeTourPackages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="gradient-hero p-6">
                    <h4 className="text-xl font-bold text-primary-foreground mb-4">
                      {pkg.title}
                    </h4>
                    <div className="flex gap-3 justify-center">
                      <div className="bg-background/10 backdrop-blur-sm rounded-lg p-3 flex-1">
                        <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary-foreground">
                          <IndianRupee className="h-4 w-4" />
                          {pkg.price5Seater.toLocaleString()}
                        </div>
                        <p className="text-primary-foreground/80 text-xs text-center">5 Seater</p>
                      </div>
                      <div className="bg-background/10 backdrop-blur-sm rounded-lg p-3 flex-1">
                        <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary-foreground">
                          <IndianRupee className="h-4 w-4" />
                          {pkg.price7Seater.toLocaleString()}
                        </div>
                        <p className="text-primary-foreground/80 text-xs text-center">7 Seater</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      {pkg.temples.map((temple, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg hover:bg-muted transition-smooth text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>{temple}</span>
                        </div>
                      ))}
                    </div>

                    {pkg.images && pkg.images.length > 0 && (
                      <div className="mb-4">
                        <TourImageGallery images={pkg.images.slice(0, 6)} />
                      </div>
                    )}

                    <a
                      href="#book"
                      onClick={(e) => {
                        e.preventDefault();
                        setValue("package", pkg.title);
                        const element = document.getElementById("book");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }}
                      className="w-full gradient-hero text-primary-foreground px-4 py-3 rounded-full font-semibold hover-lift shadow-medium inline-flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book This Package
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Car Rental Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible rental options with comfortable AC vehicles for your convenience
            </p>
          </div>

          {/* Rental Features */}
          <div className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Car, text: "Well-maintained AC vehicles" },
                { icon: Clock, text: "Flexible timing options" },
                { icon: MapPin, text: "Pick up from any location" },
                { icon: Check, text: "Professional drivers" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft"
                >
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rental Packages Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="gradient-card rounded-2xl overflow-hidden shadow-medium">
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-8 text-center">Rental Packages</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-4 px-4 font-bold">Duration</th>
                        <th className="text-center py-4 px-4 font-bold">KM Limit</th>
                        <th className="text-center py-4 px-4 font-bold">Sedan (5 Seater)</th>
                        <th className="text-center py-4 px-4 font-bold">SUV (7 Seater)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rentalPackages.map((pkg) => (
                        <tr key={pkg.id} className="border-b border-border">
                          <td className="py-4 px-4 font-medium">{pkg.duration}</td>
                          <td className="py-4 px-4 text-center">
                            {pkg.distance} {pkg.distance !== "Unlimited" && "(Limited)"}
                          </td>
                          <td className="py-4 px-4 text-center font-bold text-primary">
                            ₹{pkg.sedanPrice.toLocaleString()}/-
                          </td>
                          <td className="py-4 px-4 text-center font-bold text-amber-600">
                            ₹{pkg.suvPrice.toLocaleString()}/-
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 text-center">
                  <a
                    href="#book"
                    onClick={(e) => {
                      e.preventDefault();
                      setValue("package", "Car Rental");
                      const element = document.getElementById("book");
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                    className="inline-block gradient-hero text-primary-foreground px-8 py-3 rounded-full font-semibold hover-lift shadow-medium"
                  >
                    Book a Rental
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Book Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill in your details and we'll get back to you shortly
            </p>
          </div>

          <div className="gradient-card rounded-2xl shadow-strong p-8 md:p-12 animate-fade-in">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  {...register("mobile")}
                  className="mt-2"
                />
                {errors.mobile && (
                  <p className="text-sm text-destructive mt-1">{errors.mobile.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  {...register("pickup")}
                  className="mt-2"
                />
                {errors.pickup && (
                  <p className="text-sm text-destructive mt-1">{errors.pickup.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="date">Date of Travel *</Label>
                <Input
                  id="date"
                  type="date"
                  {...register("date")}
                  className="mt-2"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && (
                  <p className="text-sm text-destructive mt-1">{errors.date.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="package">Select Package *</Label>
                <Select
                  value={watch("package")}
                  onValueChange={(value) => setValue("package", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    {allPackages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.title}>
                        {pkg.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.package && (
                  <p className="text-sm text-destructive mt-1">{errors.package.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="travelers">Number of Travelers *</Label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  placeholder="How many people?"
                  {...register("travelers")}
                  className="mt-2"
                />
                {errors.travelers && (
                  <p className="text-sm text-destructive mt-1">{errors.travelers.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="requirements">Special Requirements (Optional)</Label>
                <Textarea
                  id="requirements"
                  placeholder="Any special requests or requirements..."
                  {...register("requirements")}
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 gradient-hero text-primary-foreground hover:opacity-90 py-6 text-lg font-semibold"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
                <a
                  href="tel:7659987391"
                  className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-6 rounded-md font-semibold text-lg text-center flex items-center justify-center gap-2 transition-smooth"
                >
                  <Send className="h-5 w-5" />
                  Call to Book
                </a>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need help? Feel free to contact us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7659987391"
                className="text-primary font-semibold hover:underline"
              >
                📞 7659987391
              </a>
              <a
                href="tel:9346790058"
                className="text-primary font-semibold hover:underline"
              >
                📞 9346790058
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help plan your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

            <div
              className="gradient-card p-6 rounded-xl shadow-soft hover-lift text-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:trinetratravelhub@gmail.com"
                className="text-primary hover:underline"
              >
                trinetratravelhub@gmail.com
              </a>
            </div>

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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="gradient-card p-8 rounded-2xl shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
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

            <div className="gradient-card p-8 rounded-2xl shadow-medium">
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
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
                  href="mailto:trinetratravelhub@gmail.com"
                  className="block w-full bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-semibold text-center hover-lift shadow-soft"
                >
                  <Mail className="inline mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 gradient-card p-8 rounded-2xl shadow-medium">
            <h3 className="text-2xl font-bold mb-6">Find Us</h3>
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

export default Home;