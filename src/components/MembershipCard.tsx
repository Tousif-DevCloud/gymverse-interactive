
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MembershipCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const MembershipCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  className,
}: MembershipCardProps) => {
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
            <Check className={cn(
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

export default MembershipCard;
