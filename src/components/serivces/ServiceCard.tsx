import listIcon from "../../assets/service/card/listIcon.png";
import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";

type TSerive = {
  serivce: {
    image: string;
    title: string;
    description: string;
    list: string[];
  };
};

const ServiceCard = ({ serivce }: TSerive) => {
  const { ref, scaleV } = useScrolGrow();

  return (
    <motion.div
      style={{
        scale: scaleV,
      }}
      ref={ref}
      className="max-w-[412px] p-6 w-full max-h-[570px] h-full bg-black bg-opacity-[5%] rounded-md space-y-6"
    >
      <img src={serivce.image} className="h-[253px] w-full bg-contain" alt="" />
      <div className="space-y-3">
        <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
          {serivce.title}
        </h3>
        <ul className="space-y-3">
          {serivce.list.map((lst, index) => (
            <li key={index} className="flex gap-x-[18px] items-center">
              <img src={listIcon} className="w-5 h-5 bg-cover" alt="" />{" "}
              <span>{lst}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
