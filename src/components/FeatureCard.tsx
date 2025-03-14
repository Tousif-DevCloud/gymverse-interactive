
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "primary",
  className,
}: FeatureCardProps) => {
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

export default FeatureCard;
