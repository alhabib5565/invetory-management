import checkBox from "../../assets/pricing/Check Box.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";

type TPrice = {
  color: string;
  image: string;
  price: number;
  title: string;
  description: string;
  lists: { active: boolean; text: string }[];
  recommended?: boolean;
};

const PricingPlanCard = ({ price }: { price: TPrice }) => {
  const { ref, scaleV } = useScrolGrow();

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleV }}
      className={`max-w-[412px] max-h-[748px] h-full w-full border-t-4 rounded-[20px]  border-[${price.color}] bg-gray-100 bg-opacity-50 mx-auto`}
    >
      {price.recommended && (
        <p
          className={`text-sm w-[145px] h-[32px] mx-auto bg-[#0B63E5] flex justify-center items-center -mt-[32px] rounded-t-lg text-white uppercase`}
        >
          Recommended
        </p>
      )}
      <div className="divide-y-2 ">
        <div className="space-y-6  p-4 md:p-6 ">
          <div className="flex justify-between items-center">
            <img className="h-20 w-20" src={price.image} alt="" />
            <h2 className={`text-[48px] font-bold text-[${price.color}]`}>
              ${price.price}
            </h2>
          </div>
          <div className="space-y-2">
            <h4 className="text-[24px] font-semibold text-[#061C3D]">
              {price.title}
            </h4>
            <p className="text-[16px] text-[#42526B]">{price.description}</p>
          </div>

          <Button
            variant={"outline"}
            className="gap-3 border-[#0B63E5] border-2 rounded-[7px] text-[#0B63E5] hover:text-white hover:bg-[#0B63E5] text-[16px] font-bold"
          >
            Get this package <ArrowRight className="h-6 w-6"></ArrowRight>
          </Button>
        </div>
        <ul className="p-4 md:p-6 space-y-3">
          {price.lists.map((listItem, index) => (
            <li
              key={index}
              className={cn("flex gap-x-[18px] items-center", {
                "opacity-45": !listItem.active,
              })}
            >
              <img className="w-6 h-6 bg-cover" src={checkBox} alt="" />{" "}
              <span className="text-[16px] text-[#42526B]">
                {listItem.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
export default PricingPlanCard;
