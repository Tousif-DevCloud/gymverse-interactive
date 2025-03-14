
import { useRef, useEffect } from "react";
import { 
  Bot, 
  Watch, 
  Headset, 
  Trophy, 
  Calendar, 
  Salad, 
  ScanLine, 
  Users, 
  CreditCard,
  ArrowRight,
  ArrowDown,
  ChevronRight,
  Play
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import MembershipCard from "@/components/MembershipCard";
import { cn } from "@/lib/utils";

const Index = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const membershipRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    membershipRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,150,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(25,150,255,0.15),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 space-y-4 animate-slide-down opacity-0 [animation-fill-mode:forwards]">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <span>The Future of Fitness</span>
            </div>
            <h1 className="heading-xl max-w-4xl mx-auto text-balance">
              Redefine Your Fitness Experience
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of fitness with cutting-edge technology, personalized coaching, and an immersive community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "100ms" }}>
            <a href="#join" className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#vr-tour" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                <Play className="h-4 w-4 text-primary" />
              </div>
              <span>Watch VR Tour</span>
            </a>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-0 glass"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Futuristic gym with high-tech equipment" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 animate-bounce">
            <a href="#features" className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Cutting-Edge Features</span>
          </div>
          <h2 className="heading-lg">The Ultimate Fitness Experience</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mt-4">
            Our platform combines advanced technology with personalized guidance to create a fitness experience unlike any other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            ref={(el) => (featureRefs.current[0] = el)}
            style={{ "--index": 0 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Bot}
              title="AI Fitness Coach"
              description="Get personalized workout and nutrition guidance from our advanced AI coach."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[1] = el)}
            style={{ "--index": 1 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Watch}
              title="Live Workout Tracking"
              description="Sync with wearables like Apple Watch and Fitbit for real-time stats."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[2] = el)}
            style={{ "--index": 2 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Headset}
              title="VR Gym Tours"
              description="Experience our facilities through immersive 360° virtual reality tours."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[3] = el)}
            style={{ "--index": 3 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Trophy}
              title="Gamified Challenges"
              description="Join fitness challenges, earn badges, and compete on leaderboards."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[4] = el)}
            style={{ "--index": 4 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Calendar}
              title="Smart Class Booking"
              description="Get class recommendations based on your personal fitness goals."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[5] = el)}
            style={{ "--index": 5 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Salad}
              title="Dynamic Meal Planner"
              description="AI-generated meal plans tailored to your preferences and macros."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[6] = el)}
            style={{ "--index": 6 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={ScanLine}
              title="Body Progress Scanner"
              description="AI-powered progress tracking with before/after visualizations."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[7] = el)}
            style={{ "--index": 7 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={Users}
              title="Community Hub"
              description="Connect with others through our social feed and discussion forums."
            />
          </div>
          
          <div
            ref={(el) => (featureRefs.current[8] = el)}
            style={{ "--index": 8 } as React.CSSProperties}
            className="opacity-0"
          >
            <FeatureCard
              icon={CreditCard}
              title="One-Click Membership"
              description="Sign up instantly with Apple Pay, Google Pay, or cryptocurrency."
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#join" className="inline-flex items-center text-primary hover:underline">
            <span>Explore all features</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary/50 dark:bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground mt-2">Member Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">Locations Worldwide</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground mt-2">AI Coach Support</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">10k+</p>
              <p className="text-muted-foreground mt-2">Active Community</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section id="membership" className="section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Flexible Plans</span>
          </div>
          <h2 className="heading-lg">Choose Your Membership</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mt-4">
            Select the plan that best fits your fitness journey with no long-term contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            ref={(el) => (membershipRefs.current[0] = el)}
            style={{ "--index": 0 } as React.CSSProperties}
            className="opacity-0"
          >
            <MembershipCard
              title="Basic"
              price="$29"
              period="month"
              description="Perfect for beginners starting their fitness journey."
              features={[
                "Access to all gym equipment",
                "Basic AI fitness coach",
                "2 group classes per week",
                "Basic progress tracking",
                "Community access"
              ]}
            />
          </div>
          
          <div
            ref={(el) => (membershipRefs.current[1] = el)}
            style={{ "--index": 1 } as React.CSSProperties}
            className="opacity-0"
          >
            <MembershipCard
              title="Premium"
              price="$59"
              period="month"
              description="Our most popular plan with advanced features."
              features={[
                "Unlimited gym access",
                "Advanced AI coaching",
                "Unlimited group classes",
                "Wearable integration",
                "Nutrition planning",
                "VR gym experience"
              ]}
              isPopular
            />
          </div>
          
          <div
            ref={(el) => (membershipRefs.current[2] = el)}
            style={{ "--index": 2 } as React.CSSProperties}
            className="opacity-0"
          >
            <MembershipCard
              title="Elite"
              price="$99"
              period="month"
              description="The ultimate fitness experience with all premium features."
              features={[
                "24/7 access to all locations",
                "Premium AI personal trainer",
                "1-on-1 coaching sessions",
                "Advanced body scanning",
                "Custom meal plans",
                "Priority class booking",
                "Premium community features"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="join" className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(25,150,255,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join GYMVERSE today and experience the future of fitness with cutting-edge technology and personalized training.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary">
              Start Your Membership <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
              Book a Tour
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
