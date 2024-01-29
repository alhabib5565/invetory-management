import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="" className={cn("text-[32px] font-bold", className)}>
      Event <span className="text-primary">360</span>
    </a>
  );
};

export default Logo;
