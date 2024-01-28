import heroImage from "../../assets/image/header/hero-image.png";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[97px]">
      {/* test  */}
      <div className="w-ful max-w-[540px]">
        <h1 className="mb-[8px] text-[#000000]">
          Brand New <br /> event Packages
        </h1>
        <h1 className="text-[56px] font-extrabold leading-[110%] tracking-[5px] bg-gradient-to-r to-[#5A01CB] from-[#FE8900] w-fit text-transparent bg-clip-text">
          For Winter
        </h1>
        <p className="py-8 text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
        <Button
          className={cn(
            "w-[195px] h-[52px] text-[16px] font-bold rounded-none font-plus-jakarta-sans"
          )}
        >
          Explore
        </Button>
      </div>

      {/* image */}
      <div>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
