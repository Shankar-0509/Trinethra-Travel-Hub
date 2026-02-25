import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Trinethra Travel Hub" className="h-12 w-auto" />
            </div>
            <h3 className="font-bold text-lg mb-2">Trinethra Travel Hub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Where Every Journey is Blessed
            </p>
            <p className="text-sm text-muted-foreground">
              Your trusted travel partner for exploring the beauty of Vizag and Araku Valley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/rentals" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:7659987391" className="text-muted-foreground hover:text-primary transition-smooth block">
                    76599 87391
                  </a>
                  <a href="tel:8919221454" className="text-muted-foreground hover:text-primary transition-smooth block">
                    89192 21454
                  </a>
                  <a href="tel:6300699442" className="text-muted-foreground hover:text-primary transition-smooth block">
                    63006 99442
                  </a>
                  <a href="tel:9573853162" className="text-muted-foreground hover:text-primary transition-smooth block">
                    95738 53162
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:trinethratravelhub04@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  trinethratravelhub04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Visakhapatnam, Andhra Pradesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <Link
              to="/book"
              className="block w-full gradient-hero text-primary-foreground px-6 py-3 rounded-full font-semibold text-center hover-lift shadow-soft"
            >
              Book Your Trip
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Trinethra Travel Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with ❤️ for travelers seeking blessed journeys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
