
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
import FeatureCard from "@/components/FeatureCard";
import MembershipCard from "@/components/MembershipCard";
import ImageCard from "@/components/ImageCard";
import TrainerCard from "@/components/TrainerCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const Index = () => {
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
                </div>
              </TabsContent>
              
              <TabsContent value="cardio" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                        alt="Spin Class" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">Cardio</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">45 min</span>
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">Cycle Burn</h3>
                      <p className="text-muted-foreground text-sm mb-4">An immersive cycling experience with music, lights, and high-energy motivation.</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Michael Rodriguez</span>
                        <a href="#book" className="text-primary font-medium text-sm hover:underline">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="wellness" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </Tabs>
          </div>
          
          <div className="text-center">
            <a href="#schedule" className="btn-secondary">
              View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
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
      
      {/* Trainers Section */}
      <section 
        id="trainers" 
        className="section-padding"
        ref={el => sectionRefs.current[2] = el}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Expert Guidance</span>
          </div>
          <h2 className="heading-lg mb-4">Meet Our Elite Trainers</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our team of certified professionals is dedicated to helping you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrainerCard
            name="Alex Thompson"
            specialty="HIIT & CrossFit"
            image="https://images.unsplash.com/photo-1570691079236-4bca6c45d440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            experience="8+ years"
          />
          
          <TrainerCard
            name="Sarah Chen"
            specialty="Strength & Nutrition"
            image="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            experience="10+ years"
          />
          
          <TrainerCard
            name="Michael Rodriguez"
            specialty="Cardio & Weight Loss"
            image="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            experience="7+ years"
          />
          
          <TrainerCard
            name="Maya Patel"
            specialty="Yoga & Wellness"
            image="https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            experience="12+ years"
          />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className="py-16 px-6 md:py-24 md:px-10 relative bg-gradient-to-b from-transparent to-secondary/30 dark:to-secondary/10"
        ref={el => sectionRefs.current[3] = el}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <span>Success Stories</span>
            </div>
            <h2 className="heading-lg mb-4">What Our Members Say</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Real experiences from members who transformed their lives with GYMVERSE.
            </p>
          </div>
          
          <ScrollArea className="w-full">
            <div className="flex space-x-6 pb-6">
              <TestimonialCard
                quote="The AI fitness coach has completely transformed my workouts. It's like having a personal trainer 24/7 without the cost."
                author="Jennifer K."
                role="Member since 2022"
                avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                rating={5}
              />
              
              <TestimonialCard
                quote="I've lost 30 pounds in 6 months with the personalized nutrition plans and workout routines. The body scanner keeps me motivated."
                author="Marcus T."
                role="Member since 2021"
                avatar="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1716&q=80"
                rating={5}
              />
              
              <TestimonialCard
                quote="The community aspect of GYMVERSE keeps me accountable. The challenges and leaderboards bring out my competitive side!"
                author="Sophia R."
                role="Member since 2023"
                avatar="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                rating={4}
              />
              
              <TestimonialCard
                quote="As a busy executive, the Smart Class Booking feature has been a game-changer. It recommends classes that fit my schedule and goals."
                author="David W."
                role="Member since 2022"
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                rating={5}
              />
            </div>
          </ScrollArea>
        </div>
      </section>
      
      {/* Locations Section */}
      <section 
        id="locations" 
        className="section-padding"
        ref={el => sectionRefs.current[4] = el}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Global Presence</span>
          </div>
          <h2 className="heading-lg mb-4">Find Us Near You</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            With over 50 locations worldwide, there's always a GYMVERSE ready to welcome you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="New York Location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Flagship
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">New York City</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5 mr-2" />
                <p className="text-sm text-muted-foreground">
                  123 Madison Avenue, New York, NY 10016
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Open 24/7</span>
                <a href="#locations/nyc" className="text-primary text-sm font-medium hover:underline">View Details</a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1571401735263-d410ea65f5cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80" 
                alt="Los Angeles Location" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">Los Angeles</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5 mr-2" />
                <p className="text-sm text-muted-foreground">
                  789 Venice Blvd, Los Angeles, CA 90066
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Open 24/7</span>
                <a href="#locations/la" className="text-primary text-sm font-medium hover:underline">View Details</a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="London Location" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">London</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5 mr-2" />
                <p className="text-sm text-muted-foreground">
                  45 Oxford Street, London, W1D 2DZ, UK
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Open 24/7</span>
                <a href="#locations/london" className="text-primary text-sm font-medium hover:underline">View Details</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#all-locations" className="inline-flex items-center text-primary hover:underline">
            <span>View all locations</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>
      
      {/* Membership Section */}
      <section 
        id="membership" 
        className="section-padding"
        ref={el => sectionRefs.current[5] = el}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            <span>Flexible Plans</span>
          </div>
          <h2 className="heading-lg mb-4">Choose Your Membership</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
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
      
      {/* App Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-secondary/40 dark:bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(25,150,255,0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <span>Mobile Experience</span>
              </div>
              <h2 className="heading-lg mb-6">GYMVERSE in Your Pocket</h2>
              <p className="body-md text-muted-foreground mb-8">
                Take your fitness journey wherever you go with our feature-rich mobile app. Track workouts, book classes, monitor your progress, and connect with the community—all from your smartphone.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                    <Dumbbell className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Workout Tracking</h3>
                    <p className="text-sm text-muted-foreground">Monitor your exercises, sets, reps, and rest periods with precise timing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Easy Class Booking</h3>
                    <p className="text-sm text-muted-foreground">Browse and book classes with just a few taps, with calendar integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-4">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Health Metrics Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Track your heart rate, calories, sleep quality, and other vital health data.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="#app-store" className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.0508 14.207C17.0322 14.2495 17.0105 14.292 16.9827 14.3282C16.674 14.886 16.3372 15.387 15.9665 15.8287C15.4613 16.4342 15.0447 16.8345 14.7205 17.0325C14.1935 17.3695 13.6328 17.544 13.0403 17.544C12.6065 17.544 12.076 17.4277 11.4562 17.1907C10.8335 16.9559 10.2655 16.8397 9.7507 16.8397C9.2133 16.8397 8.626 16.9559 7.9892 17.1907C7.3517 17.4277 6.842 17.5485 6.4597 17.555C5.8885 17.555 5.3188 17.3777 4.7505 17.02C4.3955 16.8043 3.955 16.3867 3.434 15.7692C2.8765 15.1072 2.4103 14.3147 2.0375 13.3897C1.6368 12.3892 1.4355 11.4192 1.4355 10.479C1.4355 9.3885 1.709 8.4615 2.254 7.7018C2.681 7.095 3.2285 6.615 3.9008 6.2602C4.573 5.9055 5.301 5.722 6.0845 5.7107C6.554 5.7107 7.1413 5.8473 7.8493 6.1133C8.5543 6.3792 9.0143 6.5157 9.226 6.5157C9.388 6.5157 9.9168 6.3565 10.8065 6.0405C11.647 5.7482 12.3635 5.6207 12.9602 5.652C14.4082 5.7465 15.4785 6.2827 16.1643 7.2653C14.8547 8.046 14.2085 9.1538 14.2268 10.5802C14.2422 11.6977 14.6472 12.6383 15.434 13.3965C15.789 13.7357 16.1938 14.0005 16.6543 14.1937C16.465 14.5442 16.267 14.8805 16.0557 15.2025C15.8445 15.5245 15.6395 15.8287 15.439 16.1177C15.2662 16.3735 15.133 16.5732 15.0422 16.715C14.878 16.9737 14.7188 17.179 14.5625 17.3357C14.3962 17.4993 14.1933 17.5715 13.9568 17.5548C13.7228 17.5382 13.4863 17.4737 13.247 17.3618C12.996 17.2455 12.7465 17.1407 12.4973 17.0475C12.2502 16.9542 11.9905 16.9077 11.7207 16.909C11.457 16.909 11.1972 16.9542 10.9433 17.0475C10.6875 17.1407 10.4365 17.2477 10.19 17.3708C9.9522 17.4848 9.714 17.5493 9.4777 17.5625C9.2415 17.5757 9.0212 17.4993 8.8183 17.3357L17.0508 14.207ZM12.902 5.652C12.9072 5.6294 12.9125 5.6054 12.917 5.5799C12.9215 5.5545 12.9242 5.5303 12.9242 5.5094C12.9242 5.4885 12.9228 5.4689 12.9188 5.4504C12.9147 5.432 12.9125 5.4137 12.9125 5.3956C12.1562 5.3956 11.2957 5.736 10.3337 6.4087C9.3718 7.0815 8.7632 7.918 8.5095 8.9185C8.5275 8.9457 8.5572 8.9607 8.5968 8.9637C8.6365 8.9667 8.668 8.9697 8.6905 8.9697C9.3955 8.9697 10.1895 8.6398 11.0698 7.982C11.95 7.324 12.518 6.521 12.7522 5.5755C12.7748 5.649 12.8237 5.6935 12.9055 5.7107L12.902 5.652Z" />
                  </svg>
                  App Store
                </a>
                <a href="#play-store" className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.46631 3.61869C5.09462 4.01339 4.87218 4.59374 4.87218 5.30712V18.6935C4.87218 19.4069 5.09462 19.9872 5.46631 20.3819L5.55334 20.4603L14.311 11.7026V11.2973L5.55334 2.53955L5.46631 2.61869Z" />
                    <path d="M17.7286 15.1204L14.3114 11.7032V11.2979L17.7293 7.88071L17.8322 7.94071L21.7904 10.2152C22.9293 10.8594 22.9293 11.9401 21.7904 12.5859L17.8322 14.8604L17.7286 15.1204Z" />
                    <path d="M17.8321 14.8598L14.3114 11.3005L5.46631 20.1456C5.86102 20.5695 6.44926 20.6209 7.12426 20.1969L17.8321 14.8598Z" />
                    <path d="M5.46631 3.85498C6.44926 3.4317 7.12426 3.48227 7.50955 3.90498L14.3114 11.3005L17.8321 7.94113L7.12426 2.60498C6.44926 2.17498 5.86102 2.22555 5.46631 2.65884L5.46631 3.85498Z" />
                  </svg>
                  Play Store
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-64 md:w-80">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary to-blue-600 opacity-50 blur"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden border shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1635166304269-9b6988c73587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                    alt="GYMVERSE Mobile App" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="join" className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(25,150,255,0.15),transparent_70%)]" />
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
            alt="Background"
            className="w-full h-full object-cover object-center opacity-10"
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join GYMVERSE today and experience the future of fitness with cutting-edge technology and personalized training.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/join-now" className="btn-primary">
              Start Your Membership <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/book-tour" className="btn-secondary">
              Book a Tour
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
