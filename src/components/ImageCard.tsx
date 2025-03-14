
import { cn } from "@/lib/utils";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

const ImageCard = ({
  image,
  title,
  description,
  href,
  className,
}: ImageCardProps) => {
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

export default ImageCard;
