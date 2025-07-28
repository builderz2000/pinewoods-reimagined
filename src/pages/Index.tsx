import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const heroLandscape = "/lovable-uploads/46a99dc9-d8e8-4e93-a7f0-c3fd425196c7.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 w-full max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 tracking-normal break-words">
            When the time comes to transition your business,{" "}
            <br className="hidden sm:block" />
            choosing the right buyer is crucial.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 bg-background overflow-x-hidden">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="p-6 sm:p-8 md:p-12 bg-card/80 backdrop-blur-sm border border-accent/50 text-center">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold text-accent tracking-[0.1em] uppercase">
                About
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-foreground tracking-normal break-words">
                PINEWOODS MANAGEMENT
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Pinewoods Management is led by a seasoned investor turned entrepreneur and operator 
                looking to acquire a single great company and operate it for a very long time.
              </p>
              <div className="pt-4">
                <Button asChild variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent/20 text-sm sm:text-base">
                  <Link to="/founder-bio">&gt;&gt; Founder Bio</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Landscape Image Section */}
      <section className="py-0 overflow-hidden">
        <div className="w-full">
          <img 
            src={heroLandscape} 
            alt="Landscape view" 
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Different Approach Section */}
      <section className="py-20 px-4 sm:px-6 bg-background overflow-x-hidden">
        <div className="container mx-auto max-w-6xl text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-8 tracking-normal break-words">
            A DIFFERENT APPROACH
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pinewoods Management understands that selling your company is a difficult and personal decision. 
              Pinewoods Management offers an alternate route to selling to an investment group or a competitor, 
              striving to build upon what you have accomplished.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base max-w-full">
              <Link to="/why-pinewoods" className="px-3 sm:px-4 py-3 text-center break-words">&gt;&gt; Learn More About What Makes Pinewoods Different</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
