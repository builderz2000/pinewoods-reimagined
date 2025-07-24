import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-light text-primary-foreground tracking-wide">
            Pinewoods Management
          </Link>
          
          <div className="hidden md:flex items-center space-x-0">
            <Button
              asChild
              variant="ghost"
              className={cn(
                "text-primary-foreground hover:text-accent-foreground hover:bg-accent/20 border border-transparent rounded-none px-6 py-2",
                isActive("/founder-bio") && "bg-accent/30 text-accent-foreground border-accent"
              )}
            >
              <Link to="/founder-bio">Founder Bio</Link>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              className={cn(
                "text-primary-foreground hover:text-accent-foreground hover:bg-accent/20 border border-transparent rounded-none px-6 py-2",
                isActive("/why-pinewoods") && "bg-accent/30 text-accent-foreground border-accent"
              )}
            >
              <Link to="/why-pinewoods">Why Pinewoods Management</Link>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              className={cn(
                "text-primary-foreground hover:text-accent-foreground hover:bg-accent/20 border border-transparent rounded-none px-6 py-2",
                isActive("/contact") && "bg-accent/30 text-accent-foreground border-accent"
              )}
            >
              <Link to="/contact">Contact Info</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;