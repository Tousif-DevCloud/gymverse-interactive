
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Trophy, Users, Dumbbell } from "lucide-react";
import { useState } from "react";

const JoinNow = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const handleNextStep = () => {
    setStep(step + 1);
  };
  
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$29.99",
      period: "per month",
      description: "Perfect for beginners. Access to essential gym facilities.",
      features: [
        "Full gym access",
        "Locker rooms & showers",
        "Basic fitness assessment",
        "1 free personal training session",
      ],
      icon: <Dumbbell className="h-6 w-6 text-primary" />,
    },
    {
      id: "premium",
      name: "Premium",
      price: "$49.99",
      period: "per month",
      description: "Our most popular plan. Includes group classes and more perks.",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "Nutrition consultation",
        "Access to sauna & spa",
        "Quarterly fitness assessments",
      ],
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      id: "elite",
      name: "Elite",
      price: "$79.99",
      period: "per month",
      description: "The ultimate fitness experience. Unlimited access to all amenities.",
      features: [
        "All Premium features",
        "4 personal training sessions/month",
        "Monthly massage therapy",
        "VIP locker service",
        "Exclusive member events",
        "Premium app features",
      ],
      icon: <Trophy className="h-6 w-6 text-primary" />,
    },
  ];
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-lg text-center mb-4">Join GymVerse Today</h1>
        <p className="body-md text-center text-muted-foreground mb-10">
          Choose a membership plan that works for you and start your fitness journey
        </p>
        
        <div className="space-y-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="heading-md mb-6">Step 1: Choose your plan</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedPlan === plan.id ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-2">
                        {plan.icon}
                        {selectedPlan === plan.id && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="mt-1">
                        <span className="text-2xl font-bold">{plan.price}</span>{" "}
                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <p className="mb-4">{plan.description}</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <Button 
                  onClick={handleNextStep} 
                  disabled={!selectedPlan}
                  size="lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="heading-md mb-6">Step 2: Enter your details</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Gender</Label>
                      <RadioGroup defaultValue="male" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mt-8">
                <Button onClick={handlePrevStep} variant="outline" size="lg">
                  Back
                </Button>
                <Button onClick={handleNextStep} size="lg">
                  Continue
                </Button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="heading-md mb-6">Step 3: Payment method</h2>
              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="applepay">Apple Pay</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Enter name on card" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="Enter your card number" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="CVC" />
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal" className="text-center py-12">
                      <p className="text-muted-foreground mb-4">You will be redirected to PayPal to complete payment</p>
                      <Button>Continue with PayPal</Button>
                    </TabsContent>
                    
                    <TabsContent value="applepay" className="text-center py-12">
                      <p className="text-muted-foreground mb-4">Pay quickly and securely with Apple Pay</p>
                      <Button>Pay with Apple Pay</Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mt-8">
                <Button onClick={handlePrevStep} variant="outline" size="lg">
                  Back
                </Button>
                <Button size="lg">
                  Complete Membership
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default JoinNow;
