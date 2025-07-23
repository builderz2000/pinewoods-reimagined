import Navigation from "@/components/Navigation";
import CookieNotice from "@/components/CookieNotice";
import { Card } from "@/components/ui/card";
import founderPhoto from "@/assets/founder-photo.jpg";

const FounderBio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieNotice />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-wide">
            EXPERIENCE + DEDICATION + PASSION
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With a deep commitment to preserving your company's legacy and a proven track record of driving growth, 
            I am dedicated to being a long-term steward who will ensure your business thrives and evolves for years to come.
          </p>
        </div>
      </section>

      {/* About Dan Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                About Dan
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                  As a first-generation immigrant growing up in the Midwest, I learned early the value of 
                  hard work, resilience, and the importance of community. These values carried me through 
                  my earliest jobs, academic pursuits, and ultimately into my professional career. 
                  I developed a steadfast belief that hard work beats luck and that challenges are our best teachers.
                </p>
                
                <p>
                  Today, I'm focused on acquiring a company where I can use my experience to foster 
                  sustainable growth while preserving the legacy of an established business.
                </p>
                
                <p>
                  When not working, my wife and I can be found spending time together with our three young 
                  children, volunteering at our kids' school, or exploring the outdoors. We believe in the 
                  importance of giving back to our community and modeling for our children the values of 
                  service and gratitude.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Card className="p-1 bg-card shadow-lg">
                <img 
                  src={founderPhoto} 
                  alt="Photo of Dan Grigorescu"
                  className="w-full max-w-md rounded-md"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderBio;