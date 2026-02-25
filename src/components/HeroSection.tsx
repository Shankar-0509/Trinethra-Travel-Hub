import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import heroBeach from "@/assets/hero-vizag-beach.jpg";
import heroAraku from "@/assets/hero-araku-valley.jpg";
import heroTemple from "@/assets/hero-temple.jpg";
import heroCaves from "@/assets/hero-borra-caves.jpg";
import heroWaterfall from "@/assets/hero-waterfall.jpg";

const slides = [
  { image: heroBeach, title: "Vizag Beaches", subtitle: "Golden sands and azure waves" },
  { image: heroAraku, title: "Araku Valley", subtitle: "Misty hills and coffee plantations" },
  { image: heroTemple, title: "Sacred Temples", subtitle: "Spiritual journeys blessed by divine" },
  { image: heroCaves, title: "Borra Caves", subtitle: "Nature's magnificent formations" },
  { image: heroWaterfall, title: "Waterfalls", subtitle: "Cascading beauty in nature's lap" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm text-white font-medium">
              Vizag, Araku & Beyond
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Trinethra Travel Hub
          </h1>
          
          <p className="text-xl md:text-3xl text-gold font-semibold mb-8 drop-shadow-md">
            Where Every Journey is Blessed
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow">
            Experience the divine beauty of Visakhapatnam and Araku Valley with our trusted travel services. 
            From pristine beaches to misty mountains, we make every journey memorable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/tours"
              className="gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-strong w-full sm:w-auto"
            >
              Explore Tours
            </Link>
            <Link
              to="/book"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover-lift shadow-strong w-full sm:w-auto border-2 border-primary/20"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-gold"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/75 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
