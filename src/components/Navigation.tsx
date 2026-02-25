import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Tours", path: "#tours" },
    { name: "Rentals", path: "#rentals" },
    { name: "Book Now", path: "#book" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const sectionId = path.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img src={logo} alt="Trinethra Travel Hub" className="h-14 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Trinethra Travel Hub</h1>
              <p className="text-xs text-muted-foreground">Where Every Journey is Blessed</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="relative font-medium transition-smooth text-foreground hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:7659987391"
            className="hidden lg:flex items-center gap-2 gradient-hero text-primary-foreground px-6 py-2.5 rounded-full font-medium hover-lift shadow-soft"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="block py-3 px-4 rounded-lg font-medium transition-smooth text-foreground hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:7659987391"
              className="flex items-center justify-center gap-2 mt-4 gradient-hero text-primary-foreground px-6 py-3 rounded-full font-medium shadow-soft"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
