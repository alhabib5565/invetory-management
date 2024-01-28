import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
