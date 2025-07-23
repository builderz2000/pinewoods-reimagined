import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroLandscape from "@/assets/hero-landscape.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 tracking-wide">
            When the time comes to transition your business,{" "}
            <br className="hidden md:block" />
            choosing the right buyer is crucial.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-2 border-accent/30 text-center">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold text-accent tracking-[0.2em] uppercase">
                About
              </h2>
              <h3 className="text-2xl md:text-3xl font-light text-foreground tracking-wide">
                PINEWOODS MANAGEMENT
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Pinewoods Management is led by a seasoned investor turned entrepreneur and operator 
                looking to acquire a single great company and operate it for a very long time.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/founder-bio">&gt;&gt; Founder Bio</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Different Approach Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-wide">
            A DIFFERENT APPROACH
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pinewoods Management understands that selling your company is a difficult and personal decision. 
              Pinewoods Management offers an alternate route to selling to an investment group or a competitor, 
              striving to build upon what you have accomplished.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/why-pinewoods">&gt;&gt;Learn More About What Makes Pinewoods Different</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
