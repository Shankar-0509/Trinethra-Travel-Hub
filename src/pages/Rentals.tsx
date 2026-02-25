import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Check, Users } from "lucide-react";
import { rentalPackages } from "@/data/tourPackages";

const Rentals = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Car Rental Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Flexible rental options with comfortable AC vehicles for your convenience
          </p>
        </div>
      </section>

      {/* Rental Features */}
      <section className="py-12 px-4 bg-gradient-card">
        <div className="container mx-auto">
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
      </section>

      {/* Sedan Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="font-semibold text-primary">Sedan (5 Seater)</span>
            </div>
            <h2 className="text-3xl font-bold">Comfortable Sedan Packages</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {rentalPackages.map((pkg, index) => (
              <div
                key={`sedan-${pkg.id}`}
                className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-hero p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    {pkg.duration}
                  </h3>
                  <p className="text-primary-foreground/90">
                    {pkg.distance} {pkg.distance !== "Unlimited" && "(Limited)"}
                  </p>
                </div>

                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    ₹{pkg.sedanPrice.toLocaleString()}/-
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">AC Only</p>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Users className="h-4 w-4" />
                    <span>5 Seater</span>
                  </div>

                  <Link
                    to="/book"
                    state={{ selectedPackage: `Sedan Rental - ${pkg.duration}` }}
                    className="w-full gradient-hero text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm block hover-lift shadow-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUV Packages */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="font-semibold text-primary">SUV (7 Seater)</span>
            </div>
            <h2 className="text-3xl font-bold">Spacious SUV Packages</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {rentalPackages.map((pkg, index) => (
              <div
                key={`suv-${pkg.id}`}
                className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {pkg.duration}
                  </h3>
                  <p className="text-white/90">
                    {pkg.distance} {pkg.distance !== "Unlimited" && "(Limited)"}
                  </p>
                </div>

                <div className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    ₹{pkg.suvPrice.toLocaleString()}/-
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">AC Only</p>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Users className="h-4 w-4" />
                    <span>7 Seater</span>
                  </div>

                  <Link
                    to="/book"
                    state={{ selectedPackage: `SUV Rental - ${pkg.duration}` }}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full font-semibold text-sm block hover-lift shadow-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="gradient-card rounded-2xl overflow-hidden shadow-medium">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Package Comparison</h2>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;