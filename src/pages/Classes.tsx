
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Search, Filter, Clock, Users, Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ImageCard from "@/components/ImageCard";

const Classes = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const popularClasses = [
    {
      id: 1,
      title: "HIIT Challenge",
      description: "High-intensity interval training",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      href: "#class-detail",
    },
    {
      id: 2,
      title: "Yoga Flow",
      description: "Mindful movement and flexibility",
      image: "https://images.unsplash.com/photo-1593810450967-f9c6688fe0c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      href: "#class-detail",
    },
    {
      id: 3,
      title: "Strength Circuit",
      description: "Full-body strength training",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      href: "#class-detail",
    },
    {
      id: 4,
      title: "Spin Class",
      description: "High-energy indoor cycling",
      image: "https://images.unsplash.com/photo-1591741849797-ce2a0d98f323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      href: "#class-detail",
    }
  ];
  
  const classesByDay = {
    monday: [
      { id: 1, time: "07:00 - 08:00", name: "Morning HIIT", trainer: "Alex Johnson", spots: 5 },
      { id: 2, time: "09:30 - 10:30", name: "Yoga Flow", trainer: "Sarah Kim", spots: 8 },
      { id: 3, time: "12:00 - 13:00", name: "Lunch Express", trainer: "Mike Chen", spots: 10 },
      { id: 4, time: "17:30 - 18:30", name: "Strength Circuit", trainer: "Emma Wilson", spots: 3 },
      { id: 5, time: "19:00 - 20:00", name: "Spin Class", trainer: "James Taylor", spots: 0 },
    ],
    tuesday: [
      { id: 6, time: "07:00 - 08:00", name: "Boxing Basics", trainer: "Ryan Martinez", spots: 6 },
      { id: 7, time: "10:00 - 11:00", name: "Pilates", trainer: "Lisa Wong", spots: 12 },
      { id: 8, time: "12:30 - 13:30", name: "Core Crusher", trainer: "Tom Black", spots: 15 },
      { id: 9, time: "18:00 - 19:00", name: "CrossFit", trainer: "Steve Davis", spots: 2 },
      { id: 10, time: "20:00 - 21:00", name: "Zumba", trainer: "Maria Garcia", spots: 8 },
    ],
    wednesday: [
      { id: 11, time: "07:00 - 08:00", name: "Morning HIIT", trainer: "Alex Johnson", spots: 4 },
      { id: 12, time: "09:30 - 10:30", name: "Yoga Flow", trainer: "Sarah Kim", spots: 7 },
      { id: 13, time: "12:00 - 13:00", name: "Lunch Express", trainer: "Mike Chen", spots: 9 },
      { id: 14, time: "17:30 - 18:30", name: "Strength Circuit", trainer: "Emma Wilson", spots: 6 },
      { id: 15, time: "19:00 - 20:00", name: "Spin Class", trainer: "James Taylor", spots: 1 },
    ],
    thursday: [
      { id: 16, time: "07:00 - 08:00", name: "Boxing Basics", trainer: "Ryan Martinez", spots: 5 },
      { id: 17, time: "10:00 - 11:00", name: "Pilates", trainer: "Lisa Wong", spots: 11 },
      { id: 18, time: "12:30 - 13:30", name: "Core Crusher", trainer: "Tom Black", spots: 14 },
      { id: 19, time: "18:00 - 19:00", name: "CrossFit", trainer: "Steve Davis", spots: 0 },
      { id: 20, time: "20:00 - 21:00", name: "Zumba", trainer: "Maria Garcia", spots: 7 },
    ],
    friday: [
      { id: 21, time: "07:00 - 08:00", name: "Morning HIIT", trainer: "Alex Johnson", spots: 3 },
      { id: 22, time: "09:30 - 10:30", name: "Yoga Flow", trainer: "Sarah Kim", spots: 6 },
      { id: 23, time: "12:00 - 13:00", name: "Lunch Express", trainer: "Mike Chen", spots: 8 },
      { id: 24, time: "17:30 - 18:30", name: "Strength Circuit", trainer: "Emma Wilson", spots: 4 },
      { id: 25, time: "19:00 - 20:00", name: "Spin Class", trainer: "James Taylor", spots: 2 },
    ],
    saturday: [
      { id: 26, time: "09:00 - 10:30", name: "Weekend Warrior", trainer: "Alex Johnson", spots: 10 },
      { id: 27, time: "11:00 - 12:00", name: "Yoga Flow", trainer: "Sarah Kim", spots: 15 },
      { id: 28, time: "13:00 - 14:00", name: "Family Fitness", trainer: "Mike Chen", spots: 20 },
      { id: 29, time: "15:00 - 16:00", name: "Dance Cardio", trainer: "Maria Garcia", spots: 5 },
    ],
    sunday: [
      { id: 30, time: "10:00 - 11:30", name: "Sunday Stretch", trainer: "Lisa Wong", spots: 12 },
      { id: 31, time: "12:00 - 13:00", name: "Meditation", trainer: "Sarah Kim", spots: 18 },
      { id: 32, time: "14:00 - 15:00", name: "Recovery Yoga", trainer: "Mike Chen", spots: 25 },
    ],
  };
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="section-padding">
        <h1 className="heading-lg mb-4">Fitness Classes</h1>
        <p className="body-md text-muted-foreground mb-10 max-w-3xl">
          Discover a variety of classes designed to help you reach your fitness goals. 
          From high-intensity workouts to mindful movement, we have something for everyone.
        </p>
        
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for classes, trainers..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularClasses.map((item) => (
              <ImageCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                href={item.href}
                className="aspect-[3/4]"
              />
            ))}
          </div>
        </div>
        
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Class Schedule</CardTitle>
            <CardDescription>Book your spot in upcoming classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Select a date
                </h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <Tabs defaultValue="monday">
                  <TabsList className="grid grid-cols-7 mb-4">
                    <TabsTrigger value="monday">Mon</TabsTrigger>
                    <TabsTrigger value="tuesday">Tue</TabsTrigger>
                    <TabsTrigger value="wednesday">Wed</TabsTrigger>
                    <TabsTrigger value="thursday">Thu</TabsTrigger>
                    <TabsTrigger value="friday">Fri</TabsTrigger>
                    <TabsTrigger value="saturday">Sat</TabsTrigger>
                    <TabsTrigger value="sunday">Sun</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(classesByDay).map(([day, classes]) => (
                    <TabsContent key={day} value={day} className="space-y-4">
                      {classes.map((classItem) => (
                        <div 
                          key={classItem.id} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-start gap-4 mb-3 sm:mb-0">
                            <div className="bg-primary/10 p-2 rounded-md text-primary">
                              <Clock className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{classItem.name}</h4>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {classItem.time}
                                </span>
                                <span className="hidden sm:inline">•</span>
                                <span>{classItem.trainer}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">
                                {classItem.spots === 0 
                                  ? <Badge variant="destructive">Full</Badge>
                                  : `${classItem.spots} spots left`
                                }
                              </span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              disabled={classItem.spots === 0}
                              className="ml-2"
                            >
                              Book <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Classes;
