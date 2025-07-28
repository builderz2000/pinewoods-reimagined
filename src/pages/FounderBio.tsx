import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
const founderPhoto = "/lovable-uploads/a84808f9-e671-4cd2-b01d-af117a6192b9.png";
const familyPhoto = "/lovable-uploads/33b31de1-03e9-4f1d-a1ef-0e316cbeb860.png";

const FounderBio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase mb-8">
            EXPERIENCE + DEDICATION + PASSION
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-5xl mx-auto">
            With a deep commitment to preserving your company's legacy and a proven track record of driving growth, 
            I am dedicated to being a long-term steward who will ensure your business thrives and evolves for years to come.
          </h1>
        </div>
      </section>

      {/* Photo and About Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <img 
              src={founderPhoto} 
              alt="Dan Grigorescu, Founder of Pinewoods Management" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center tracking-wide">
              About Dan
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                My name is Dan Grigorescu, and I have spent nearly twenty years working with founders 
                and their companies as an engaged board advisor and investor. Throughout my career, 
                I've partnered with businesses, providing guidance on strategic decisions and offering 
                support to navigate both seasons of growth and headwinds.
              </p>
              <p>
                I've worked closely with teams to refine strategies, achieve their vision, and recruit 
                additional talent to drive success. As a trusted advisor, I've helped companies unlock 
                their potential and build the foundation for long-term success and provided a path for 
                founders to transition their companies to the next steward. Inspired by these business 
                owners and founders and my learnings from them, I am embarking on my own journey to 
                acquire and operate a single exceptional business for the long-term.
              </p>
              <p>
                As a first-generation immigrant growing up in the Midwest, I learned early the value 
                of hard work, resilience, and the importance of community. These values carried me 
                through my earliest jobs, academic pursuits, and ultimately into my professional career. 
                I developed a steadfast belief that hard work beats luck and that challenges are our best teachers.
              </p>
              <p>
                Today, I'm focused on acquiring a company where I can use my experience to foster 
                sustainable growth while preserving the legacy of an established business.
              </p>
              <p>
                When not working, my wife and I can be found spending time together with our three 
                young children, volunteering at our kids' school and church, exploring local bike 
                trails, and camping in Wisconsin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Photo Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src={familyPhoto} 
            alt="Grigorescu Family" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Guidance Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-sm font-semibold text-accent tracking-[0.3em] uppercase mb-6">
            GUIDANCE + MENTORSHIP + SUPPORT
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-foreground tracking-wide">
            Supported by a dedicated advisory board of experienced executives and investors
          </h3>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FounderBio;