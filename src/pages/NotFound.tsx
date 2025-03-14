
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <p className="body-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center btn-primary"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
