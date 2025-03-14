
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share2, Users, Calendar, Trophy, Search, Plus } from "lucide-react";
import TrainerCard from "@/components/TrainerCard";

const Community = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="section-padding">
        <h1 className="heading-lg mb-4">GymVerse Community</h1>
        <p className="body-md text-muted-foreground mb-10 max-w-3xl">
          Connect with fellow members, join fitness challenges, share your progress, 
          and stay updated on all community events and activities.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader className="border-b pb-3">
                <CardTitle>Community Feed</CardTitle>
                <CardDescription>
                  See what's happening in the GymVerse community
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 p-4 border-b">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Input placeholder="Share your fitness journey..." />
                  <Button>Post</Button>
                </div>
                
                <div className="space-y-6 pt-4">
                  {/* Post 1 */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Michael Peterson</h3>
                          <p className="text-sm text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <Badge variant="outline">Elite Member</Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm">Just completed my 100th workout at GymVerse! 💪 The journey has been incredible, and I've never felt stronger. Thanks to all the trainers for their support!</p>
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                          alt="Workout celebration"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-6">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Heart className="h-4 w-4" /> 68
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" /> 14
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Share2 className="h-4 w-4" /> Share
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Post 2 */}
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Sarah Lewis</h3>
                          <p className="text-sm text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                      <Badge variant="outline">Premium Member</Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm">The new yoga class with instructor Lisa was amazing! Highly recommend for anyone looking to improve flexibility and mindfulness. Who else is joining next Tuesday? #YogaFlow #MindAndBody</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-6">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Heart className="h-4 w-4" /> 42
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" /> 8
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Share2 className="h-4 w-4" /> Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Latest Challenges</CardTitle>
                <CardDescription>
                  Join these community challenges to push your limits
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {/* Challenge 1 */}
                  <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">30-Day Strength Challenge</h3>
                      <Badge>In Progress</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Build your strength over 30 days with this progressive challenge. 
                      Complete daily exercises and track your improvements.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>243 participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>15 days left</span>
                      </div>
                      <Button size="sm">Join Challenge</Button>
                    </div>
                  </div>
                  
                  {/* Challenge 2 */}
                  <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">Summer Shred</h3>
                      <Badge variant="outline">Starting Soon</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get beach-ready with our 6-week Summer Shred challenge. 
                      Combines HIIT, nutrition plans, and accountability.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>127 participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Starts in 3 days</span>
                      </div>
                      <Button size="sm">Join Challenge</Button>
                    </div>
                  </div>
                  
                  {/* Challenge 3 */}
                  <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">10K Steps Daily</h3>
                      <Badge variant="secondary">Ongoing</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Simple but effective: hit 10,000 steps every day. Connect your 
                      fitness tracker and compete with others on the leaderboard.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>589 participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4" />
                        <span>Earn daily badges</span>
                      </div>
                      <Button size="sm">Join Challenge</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-xl mb-1">Jordan Doe</h3>
                <Badge className="mb-4">Premium Member</Badge>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="border rounded-md p-2">
                    <p className="text-2xl font-semibold">12</p>
                    <p className="text-xs text-muted-foreground">Workouts</p>
                  </div>
                  <div className="border rounded-md p-2">
                    <p className="text-2xl font-semibold">3</p>
                    <p className="text-xs text-muted-foreground">Challenges</p>
                  </div>
                  <div className="border rounded-md p-2">
                    <p className="text-2xl font-semibold">42</p>
                    <p className="text-xs text-muted-foreground">Connections</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Local fitness events you might like</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-center min-w-16">
                      <p className="text-xs">JUN</p>
                      <p className="text-xl font-bold">15</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Summer Fitness Expo</h4>
                      <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">86 attending</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-center min-w-16">
                      <p className="text-xs">JUN</p>
                      <p className="text-xl font-bold">22</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Charity 5K Run</h4>
                      <p className="text-sm text-muted-foreground">8:00 AM - 11:00 AM</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">124 attending</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="bg-primary/10 text-primary px-3 py-2 rounded-md text-center min-w-16">
                      <p className="text-xs">JUL</p>
                      <p className="text-xl font-bold">02</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Nutrition Workshop</h4>
                      <p className="text-sm text-muted-foreground">6:00 PM - 8:00 PM</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">42 attending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Find Groups</CardTitle>
                  <CardDescription>Join fitness communities</CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary">RR</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">Road Runners</h4>
                        <p className="text-xs text-muted-foreground">312 members</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary">YE</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">Yoga Enthusiasts</h4>
                        <p className="text-xs text-muted-foreground">156 members</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/20 text-primary">SC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">Strength Collective</h4>
                        <p className="text-xs text-muted-foreground">98 members</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" size="sm" className="w-full">View All Groups</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;
