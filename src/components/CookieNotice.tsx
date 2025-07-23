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
    <Card className="fixed bottom-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-sm border-t border-border rounded-none p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-accent-foreground">
          We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. 
          To manage your cookies and learn more about our use of cookies click "Cookie Settings".{" "}
          <a href="#" className="underline hover:no-underline">Privacy Policy</a>
        </p>
        
        <div className="flex gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="bg-transparent"
          >
            Settings
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="bg-transparent"
          >
            Decline All
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CookieNotice;