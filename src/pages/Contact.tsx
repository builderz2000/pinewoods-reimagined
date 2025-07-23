import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-wide">
            Contact Information
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to discuss the future of your business? I'd be happy to learn more about your company 
            and explore how Pinewoods Management can help ensure its continued success.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">dan@pinewoodsmanagement.com</p>
            </Card>
            
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </Card>
            
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 text-center hover:shadow-lg transition-all duration-300">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Midwest, United States</p>
            </Card>
          </div>
          
          {/* Call to Action */}
          <Card className="p-12 bg-primary/5 border border-accent/20 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every successful transition begins with a conversation. I believe in taking the time to 
              understand your business, your goals, and your vision for the future. Reach out today 
              to begin exploring how we can work together.
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3"
              onClick={() => window.location.href = 'mailto:dan@pinewoodsmanagement.com'}
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;