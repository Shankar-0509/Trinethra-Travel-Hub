import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { tourPackages, templeTourPackages, rentalPackages } from "@/data/tourPackages";

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

const BookNow = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const preselectedPackage = location.state?.selectedPackage || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      package: preselectedPackage,
    },
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
    
    // Format WhatsApp message
    const message = `*New Booking Request*\n\n` +
      `Name: ${data.name}\n` +
      `Mobile: ${data.mobile}\n` +
      `Pickup Location: ${data.pickup}\n` +
      `Travel Date: ${data.date}\n` +
      `Package: ${data.package}\n` +
      `Number of Travelers: ${data.travelers}\n` +
      `${data.requirements ? `Special Requirements: ${data.requirements}\n` : ''}`;
    
    const whatsappUrl = `https://wa.me/917659987391?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking request sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Book Your Journey
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Fill in your details and we'll get back to you shortly
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="gradient-card rounded-2xl shadow-strong p-8 md:p-12 animate-fade-in">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
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

              {/* Mobile */}
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

              {/* Pickup Location */}
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

              {/* Date */}
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

              {/* Package Selection */}
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

              {/* Number of Travelers */}
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

              {/* Special Requirements */}
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

              {/* Submit Buttons */}
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

          {/* Contact Info */}
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
    </div>
  );
};

export default BookNow;
