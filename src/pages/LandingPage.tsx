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
  Play,
  Dumbbell,
  Heart,
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Internal components
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "primary",
  className,
}: {
  icon: typeof Bot;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "feature-card animate-slide-up opacity-0 [animation-fill-mode:forwards]",
        variant === "primary" ? "bg-secondary dark:bg-secondary/60" : "glass",
        className
      )}
      style={{ animationDelay: "calc(var(--index, 0) * 100ms)" }}
    >
      <div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full mb-4",
          variant === "primary" ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const MembershipCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  className,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300 animate-slide-up opacity-0 [animation-fill-mode:forwards] border",
        isPopular 
          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25" 
          : "bg-card border-border",
        className
      )}
      style={{ animationDelay: "calc(var(--index, 0) * 100ms)" }}
    >
      {isPopular && (
        <div className="bg-primary-foreground text-primary px-4 py-1 rounded-full w-fit text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      
      <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
      
      <div className="flex items-baseline mb-4">
        <span className="font-display text-4xl font-bold">{price}</span>
        <span className="ml-1 text-sm opacity-80">/{period}</span>
      </div>
      
      <p className={cn(
        "mb-6",
        isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className={cn(
              "h-5 w-5 mr-2 flex-shrink-0 mt-0.5",
              isPopular ? "text-primary-foreground" : "text-primary"
            )} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        className={cn(
          "w-full py-3 px-6 rounded-md font-medium transition-colors",
          isPopular 
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Get Started
      </button>
    </div>
  );
};

const ImageCard = ({
  image,
  title,
  description,
  href,
  className,
}: {
  image: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => 
    href ? (
      <a href={href} className={cn("image-card block h-full", className)}>
        {children}
      </a>
    ) : (
      <div className={cn("image-card h-full", className)}>
        {children}
      </div>
    );
  
  return (
    <CardWrapper>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="image-overlay"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white font-display text-xl font-semibold mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </CardWrapper>
  );
};

const TrainerCard = ({
  name,
  specialty,
  image,
  experience,
  className,
}: {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  className?: string;
}) => {
  return (
    <div className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <a href="#trainer-profile" className="inline-flex items-center text-white text-sm font-medium hover:underline">
            View Profile
          </a>
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold mb-1">{name}</h3>
      <p className="text-primary text-sm font-medium mb-1">{specialty}</p>
      <p className="text-muted-foreground text-sm">{experience} experience</p>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  rating,
  className,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  className?: string;
}) => {
  return (
    <div className={cn("min-w-[300px] md:min-w-[350px] flex-1 max-w-md bg-card rounded-xl p-6 shadow-md", className)}>
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-yellow-500">
            {i < Math.floor(rating) ? (
              <Trophy className="h-4 w-4 fill-current" />
            ) : i < Math.ceil(rating) && rating % 1 !== 0 ? (
              <Trophy className="h-4 w-4 fill-current" />
            ) : (
              <Trophy className="h-4 w-4" />
            )}
          </span>
        ))}
      </div>
      
      <p className="mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={author} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const membershipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0");
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
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    // Parallax effect for hero section
    const parallaxBg = document.querySelector('.parallax-bg');
    
    if (parallaxBg) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        parallaxBg.setAttribute('style', `transform: translateY(${scrollPosition * 0.4}px)`);
      });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(25,150,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(25,150,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
            alt="Gym Interior"
            className="parallax-bg object-cover object-center opacity-10"
          />
        </div>
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 space-y-4 animate-slide-down opacity-0 [animation-fill-mode:forwards]">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <span>The Future of Fitness</span>
            </div>
            <h1 className="heading-xl max-w-4xl mx-auto text-balance">
              Redefine Your <span className="text-gradient">Fitness Experience</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of fitness with cutting-edge technology, personalized coaching, and an immersive community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 animate-slide-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "100ms" }}>
            <Link to="/join-now" className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href="#vr-tour" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                <Play className="h-4 w-4 text-primary" />
              </div>
              <span>Watch VR Tour</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: "200ms" }}>
            <div className="image-card h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Woman working out" 
                className="w-full h-full object-cover"
              />
              <div className="image-overlay"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-display text-xl font-semibold mb-1">Personal Training</h3>
                <p className="text-white/80 text-sm">1-on-1 sessions with expert trainers</p>
              </div>
            </div>
            <div className="image-card h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Group fitness class" 
                className="w-full h-full object-cover"
              />
              <div className="image-overlay"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-display text-xl font-semibold mb-1">Group Classes</h3>
                <p className="text-white/80 text-sm">High-energy workouts with community</p>
              </div>
            </div>
            <div className="image-card h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
                alt="High-tech gym equipment" 
                className="w-full h-full object-cover"
              />
              <div className="image-overlay"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-display text-xl font-semibold mb-1">Premium Equipment</h3>
                <p className="text-white/80 text-sm">State-of-the-art machines and free weights</p>
              </div>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 animate-bounce">
            <a href="#features" className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        id="features" 
        className="section-padding"
        ref={el => sectionRefs.current[0] = el}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Cutting-Edge Features</span>
          </div>
          <h2 className="heading-lg mb-4">The Ultimate Fitness Experience</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
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
      </section>
      
      {/* Classes Section */}
      <section 
        id="classes" 
        className="py-16 px-6 md:py-24 md:px-10 relative overflow-hidden"
        ref={el => sectionRefs.current[1] = el}
      >
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <span>World-Class Training</span>
            </div>
            <h2 className="heading-lg mb-4">Explore Our Classes</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              From high-intensity workouts to mind-body wellness, find the perfect class to match your fitness goals.
            </p>
          </div>
          
          <div className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Classes</TabsTrigger>
                  <TabsTrigger value="hiit">HIIT</TabsTrigger>
                  <TabsTrigger value="strength">Strength</TabsTrigger>
                  <TabsTrigger value="cardio">Cardio</TabsTrigger>
                  <TabsTrigger value="wellness">Wellness</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="HIIT Class" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">HIIT</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">45 min</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">Power HIIT</h3>
                      <p className="text-muted-foreground text-sm mb-4">High-intensity interval training that combines cardio and strength for maximum calorie burn.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Alex Thompson</span>
                        <a href="#book" className="text-primary font-medium text-sm hover:underline">Book Now</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="Strength Training" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Strength</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">60 min</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">Advanced Lifting</h3>
                      <p className="text-muted-foreground text-sm mb-4">Build strength and muscle with our comprehensive weightlifting program.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sarah Chen</span>
                        <a href="#book" className="text-primary font-medium text-sm hover:underline">Book Now</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="Yoga Class" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Wellness</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">75 min</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">Power Yoga</h3>
                      <p className="text-muted-foreground text-sm mb-4">Blend strength and flexibility in this dynamic yoga class designed for all levels.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Maya Patel</span>
                        <a href="#book" className="text-primary font-medium text-sm hover:underline">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hiit" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="HIIT Class" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">HIIT</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">45 min</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">Power HIIT</h3>
                      <p className="text-muted-foreground text-sm mb-4">High-intensity interval training that combines cardio and strength for maximum calorie burn.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Alex Thompson</span>
                        <a href="#book" className="text-primary font-medium text-sm hover:underline">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="strength" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="Strength Training" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-40
