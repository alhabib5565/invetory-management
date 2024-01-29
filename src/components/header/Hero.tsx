import heroImage from "../../assets/image/header/hero-image.png";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const Hero = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { x: "-100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-[97px] overflow-hidden">
      {/* test  */}
      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.6,
          type: "spring",
          bounce: 4,
        }}
        className="w-ful max-w-[540px]"
      >
        <motion.h1 variants={item} className="mb-[8px] text-[#000000]">
          Brand New <br /> event Packages
        </motion.h1>
        <motion.h1
          variants={item}
          className="text-[56px] font-extrabold leading-[110%] tracking-[5px] bg-gradient-to-r to-[#5A01CB] from-[#FE8900] w-fit text-transparent bg-clip-text"
        >
          For Winter
        </motion.h1>
        <motion.p variants={item} className="py-8 text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </motion.p>
        <motion.div variants={item}>
          <Button
            className={cn(
              "w-[195px] h-[52px] text-[16px] font-bold rounded-none font-plus-jakarta-sans"
            )}
          >
            Explore
          </Button>
        </motion.div>
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <img src={heroImage} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
