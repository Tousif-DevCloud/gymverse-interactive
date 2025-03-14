
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  rating,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn("min-w-[300px] md:min-w-[350px] flex-1 max-w-md bg-card rounded-xl p-6 shadow-md", className)}>
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-yellow-500">
            {i < Math.floor(rating) ? (
              <Star className="h-4 w-4 fill-current" />
            ) : i < Math.ceil(rating) && rating % 1 !== 0 ? (
              <StarHalf className="h-4 w-4 fill-current" />
            ) : (
              <Star className="h-4 w-4" />
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

export default TestimonialCard;
