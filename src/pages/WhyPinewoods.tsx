import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import legacyImage from "@/assets/legacy-image.jpg";

const WhyPinewoods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase mb-8">
            SHARING YOUR GOALS AND VISION
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-5xl mx-auto">
            You've dedicated yourself to growing your company and have many goals as you consider its future. 
            Pinewoods Management offers a unique set of benefits that align with the interests of business owners 
            looking for a thoughtful and effective transition.
          </h1>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                COMMITMENT TO LEGACY
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I understand that for many business owners, their business represents a lifetime of hard work and dedication. 
                I am committed to honoring and building upon this legacy. My focus is on maintaining the core values and 
                traditions of the business while steering it towards future growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                EXPERIENCED BUSINESS ACQUIROR
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over fifteen years partnering with business owners and investing in private companies, I have a nuanced 
                understanding of what it truly takes to successfully navigate and complete transactions but most importantly 
                an appreciation for how personal this process is.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                PERSONALIZED TRANSITION
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach to acquisition emphasizes a respectful and smooth transition. I am looking to work with you to 
                develop a well-thought-out plan for integrating into the business to ensure that the process is handled with 
                care, minimizing disruption to employees and customers, and preserving the stability of the business.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                CERTAINTY TO CLOSE
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am taking on this journey at a later stage in my career equipped with the necessary experience, resources, 
                knowledge and support needed to close a transaction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                ALIGNED INTEREST
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am investing my own capital. My success will be directly tied to the continued growth and profitability 
                of the one company I will be acquiring.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h3 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase">
                LONG-TERM VISION
              </h3>
            </div>
            <div className="md:col-span-2 mt-4 md:mt-0">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike buyers focused on short-term financial gains, Pinewoods Management's investment is geared towards 
                long-term success. I aim to foster sustainable growth and stability, ensuring that the business continues 
                to thrive well into the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Image */}
      <section className="py-0">
        <div className="w-full">
          <img 
            src={legacyImage} 
            alt="Legacy and long-term vision" 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyPinewoods;