
import { cn } from "@/lib/utils";

interface TrainerCardProps {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  className?: string;
}

const TrainerCard = ({
  name,
  specialty,
  image,
  experience,
  className,
}: TrainerCardProps) => {
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

export default TrainerCard;
