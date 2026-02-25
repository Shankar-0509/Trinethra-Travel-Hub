import { Link } from "react-router-dom";
import { MapPin, Clock, IndianRupee, Calendar, Users } from "lucide-react";
import { tourPackages, templeTourPackages } from "@/data/tourPackages";
import TourImageGallery from "@/components/TourImageGallery";

const Tours = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
            Tour Packages
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Choose from our carefully curated tour packages designed to give you the best experience
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {tourPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="gradient-card rounded-2xl overflow-hidden shadow-medium hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Package Header */}
                <div className="gradient-hero p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                        {pkg.title}
                      </h2>
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

                {/* Package Content */}
                <div className="p-8">
                  {/* Places Grid */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Places Covered
                    </h3>
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

                  {/* Image Gallery */}
                  {pkg.images && pkg.images.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-4">Gallery</h3>
                      <TourImageGallery images={pkg.images} />
                    </div>
                  )}

                  {/* Book Button */}
                  <div className="flex justify-center mt-8">
                    <Link
                      to="/book"
                      state={{ selectedPackage: pkg.title }}
                      className="gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-medium inline-flex items-center gap-2"
                    >
                      <Calendar className="h-5 w-5" />
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Tour Packages */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Temple Tour Packages
            </h2>
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
                {/* Package Header */}
                <div className="gradient-hero p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-4">
                    {pkg.title}
                  </h3>
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

                {/* Package Content */}
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


                  {/* Book Button */}
                  <Link
                    to="/book"
                    state={{ selectedPackage: pkg.title }}
                    className="w-full gradient-hero text-primary-foreground px-4 py-3 rounded-full font-semibold hover-lift shadow-medium inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
