import { cn } from "@/lib/utils";

type TSectionHeader = {
  className?: string;
  title: string;
  description: string;
};
const SectitonHeader = ({ className, title, description }: TSectionHeader) => {
  return (
    <div
      className={cn(
        "max-w-[700px] w-full mx-auto text-center space-y-3 pb-[54px]",
        className
      )}
    >
      <h1>{title}</h1>
      <p className="text-[#566B84] text-[18px]">{description}</p>
    </div>
  );
};

export default SectitonHeader;
