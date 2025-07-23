import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import { Card } from "@/components/ui/card";
import legacyImage from "@/assets/legacy-image.jpg";

const WhyPinewoods = () => {
  const benefits = [
    {
      title: "COMMITMENT TO LEGACY",
      description: "I understand that for many business owners, their business represents a lifetime of hard work and dedication. I am committed to honoring and building upon this legacy. My focus is on maintaining the core values and traditions of the business while steering it towards future growth."
    },
    {
      title: "EXPERIENCED BUSINESS ACQUIROR",
      description: "With over fifteen years partnering with business owners and investing in private companies, I have a nuanced understanding of what it truly takes to successfully navigate and complete transactions but most importantly an appreciation for how personal this process is."
    },
    {
      title: "PERSONALIZED TRANSITION",
      description: "My approach to acquisition emphasizes a respectful and smooth transition. I am looking to work with you to develop a well-thought-out plan for integrating into the business to ensure that the process is handled with care, minimizing disruption to employees and customers, and preserving the stability of the business."
    },
    {
      title: "CERTAINTY TO CLOSE",
      description: "I am taking on this journey at a later stage in my career equipped with the necessary experience, resources, knowledge and support needed to close a transaction."
    },
    {
      title: "ALIGNED INTEREST",
      description: "I am investing my own capital. My success will be directly tied to the continued growth and profitability of the one company I will be acquiring."
    },
    {
      title: "LONG-TERM VISION",
      description: "Unlike buyers focused on short-term financial gains, Pinewoods Management's investment is geared towards long-term success. I aim to foster sustainable growth and stability, ensuring that the business continues to thrive well into the future."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-wide">
            SHARING YOUR GOALS AND VISION
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            You've dedicated yourself to growing your company and have many goals as you consider its future. 
            Pinewoods Management offers a unique set of benefits that align with the interests of business owners 
            looking for a thoughtful and effective transition.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-semibold text-accent mb-4 tracking-wider">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
            <Card className="p-1 bg-card shadow-lg max-w-4xl">
              <img 
                src={legacyImage} 
                alt="Scenic landscape representing legacy and long-term vision"
                className="w-full rounded-md"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPinewoods;