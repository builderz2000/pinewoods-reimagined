import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookieAccepted");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-sm border-t border-border rounded-none p-4 max-w-full overflow-hidden">
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-accent-foreground break-words">
          We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. 
          To manage your cookies and learn more about our use of cookies click "Cookie Settings".{" "}
          <a href="https://www.iubenda.com/privacy-policy/97469761" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </p>
        
        <div className="flex flex-wrap gap-2 shrink-0 justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="bg-transparent text-xs sm:text-sm"
          >
            Settings
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="bg-transparent text-xs sm:text-sm"
          >
            Decline All
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm"
          >
            Accept
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CookieNotice;