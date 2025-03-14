
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Award, MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import TrainerCard from "@/components/TrainerCard";

const About = () => {
  const features = [
    {
      title: "State-of-the-Art Equipment",
      description: "Our gyms feature the latest fitness technology and premium equipment to maximize your workout experience."
    },
    {
      title: "Expert Trainers",
      description: "Our certified personal trainers are dedicated to helping you achieve your fitness goals with personalized guidance."
    },
    {
      title: "Flexible Memberships",
      description: "Choose from a variety of membership options designed to fit your schedule and budget."
    },
    {
      title: "Diverse Class Selection",
      description: "From high-intensity workouts to mindful movement, our class schedule offers something for everyone."
    },
  ];
  
  const trainers = [
    {
      name: "Alex Rodriguez",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1534368786749-9b15a29a9f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      experience: "8+ years"
    },
    {
      name: "Sarah Chen",
      specialty: "Yoga & Pilates",
      image: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      experience: "10+ years"
    },
    {
      name: "Marcus Johnson",
      specialty: "Cardio & HIIT",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      experience: "6+ years"
    },
    {
      name: "Emily Wong",
      specialty: "Nutrition & Weight Management",
      image: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      experience: "7+ years"
    },
  ];
  
  const locations = [
    {
      name: "Downtown Center",
      address: "123 Main Street, Downtown",
      hours: "5:00 AM - 11:00 PM (Mon-Fri), 7:00 AM - 9:00 PM (Sat-Sun)",
      phone: "(555) 123-4567",
      email: "downtown@gymverse.com",
      features: ["Olympic-sized pool", "Luxury spa", "Rooftop workout area"]
    },
    {
      name: "Westside Studio",
      address: "456 West Boulevard, Westside",
      hours: "6:00 AM - 10:00 PM (Mon-Fri), 8:00 AM - 8:00 PM (Sat-Sun)",
      phone: "(555) 987-6543",
      email: "westside@gymverse.com",
      features: ["Climbing wall", "Boxing ring", "Yoga studio"]
    },
    {
      name: "Eastside Fitness",
      address: "789 East Avenue, Eastside",
      hours: "5:00 AM - 10:00 PM (Mon-Fri), 7:00 AM - 9:00 PM (Sat-Sun)",
      phone: "(555) 456-7890",
      email: "eastside@gymverse.com",
      features: ["CrossFit zone", "Recovery center", "Smoothie bar"]
    },
  ];
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Gym equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 section-padding flex flex-col items-center justify-center min-h-[40vh] text-center text-white">
          <h1 className="heading-lg mb-4 max-w-3xl">Redefining Fitness Since 2010</h1>
          <p className="body-lg max-w-2xl mb-8">
            Our mission is to empower individuals on their fitness journey with innovative technology, 
            expert guidance, and a supportive community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Our Story
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md mb-6">Our Philosophy</h2>
            <p className="body-md text-muted-foreground mb-4">
              At GymVerse, we believe fitness is more than just physical transformation—it's about building mental 
              strength, fostering community connections, and creating lasting habits that enhance your life.
            </p>
            <p className="body-md text-muted-foreground mb-6">
              Founded in 2010, we've grown from a single location to multiple centers across the city, 
              all while maintaining our commitment to personalized fitness experiences and cutting-edge technology.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Gym interior"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Award Winning</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Recognized as "Best Fitness Center" for 5 consecutive years by City Lifestyle Magazine.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Meet Our Expert Trainers</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our certified trainers bring years of experience and specialized knowledge 
            to help you achieve your fitness goals safely and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              specialty={trainer.specialty}
              image={trainer.image}
              experience={trainer.experience}
            />
          ))}
        </div>
      </section>
      
      <section className="section-padding">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Our Locations</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Find a GymVerse near you. Each location offers unique amenities while maintaining 
            our high standards for equipment, classes, and member experience.
          </p>
        </div>
        
        <Tabs defaultValue={locations[0].name.toLowerCase().replace(/\s+/g, "-")}>
          <TabsList className="w-full justify-start mb-6 overflow-x-auto flex-nowrap">
            {locations.map((location, index) => (
              <TabsTrigger 
                key={index} 
                value={location.name.toLowerCase().replace(/\s+/g, "-")}
                className="px-6"
              >
                {location.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {locations.map((location, index) => (
            <TabsContent 
              key={index} 
              value={location.name.toLowerCase().replace(/\s+/g, "-")}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="rounded-xl overflow-hidden mb-4 aspect-video">
                        <img 
                          src={`https://images.unsplash.com/photo-15390220724${index * 10 + 25}-bbc6e3fea129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`} 
                          alt={location.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-sm text-muted-foreground">{location.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">Hours</h3>
                            <p className="text-sm text-muted-foreground">{location.hours}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-sm text-muted-foreground">{location.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground">{location.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Special Features</h3>
                      <ul className="space-y-3 mb-6">
                        {location.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t pt-6 mt-6">
                        <h3 className="font-semibold text-lg mb-4">Visit This Location</h3>
                        <div className="space-y-4">
                          <Button className="w-full">
                            Schedule a Tour <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
};

export default About;
