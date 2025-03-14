
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-display font-bold text-xl tracking-tight">GYMVERSE</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="#features" className="font-medium hover:text-primary transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#membership" className="font-medium hover:text-primary transition-colors">
              Membership
            </a>
          </li>
          <li>
            <a href="#community" className="font-medium hover:text-primary transition-colors">
              Community
            </a>
          </li>
          <li>
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              About
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href="#join" 
            className="btn-primary"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[73px] bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a 
            href="#features" 
            className="py-3 font-medium border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#membership" 
            className="py-3 font-medium border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Membership
          </a>
          <a 
            href="#community" 
            className="py-3 font-medium border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            Community
          </a>
          <a 
            href="#about" 
            className="py-3 font-medium border-b border-border"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#join" 
            className="btn-primary mt-4 w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
