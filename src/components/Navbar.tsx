
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-wine-gradient rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">🍇</span>
            </div>
            <span className="font-bold text-xl">e-label.eu</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Advantages
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            For partners
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Our webinars
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Knowledge Base
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" asChild>
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild className="wine-gradient">
            <Link to="/register">Sign up for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
