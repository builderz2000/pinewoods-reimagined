import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-semibold">Email</span>
            </div>
            <a href="mailto:dan@pinewoodsmanagement.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
              dan@pinewoodsmanagement.com
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-semibold">Phone</span>
            </div>
            <a href="tel:+16307712015" className="text-primary-foreground/80 hover:text-accent transition-colors">
              (630) 771-2015
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-semibold">Location</span>
            </div>
            <span className="text-primary-foreground/80">
              1600 Golf Road Suite 1200<br />
              Rolling Meadows, IL 60008<br />
              United States
            </span>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Pinewoods Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;