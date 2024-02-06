import listIcon from "../../assets/service/card/listIcon.png";
import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { TService } from "./type";

const ServiceCard = ({ service }: { service: TService }) => {
  const { ref, scaleV } = useScrolGrow();

  return (
    <motion.div
      style={{
        scale: scaleV,
      }}
      ref={ref}
      className="max-w-[412px] w-full max-h-[570px] h-full bg-black bg-opacity-[5%] rounded-md relative group overflow-hidden"
    >
      <div className="space-y-6 p-6 group-hover:opacity-0 opacity-100">
        <img
          src={service.image}
          className="h-[253px] w-full bg-contain rounded-md"
          alt=""
        />
        <div className="space-y-3">
          <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
            {service.title}
          </h3>
          <ul className="space-y-3">
            {service.list.map((lst, index) => (
              <li key={index} className="flex gap-x-[18px] items-center">
                <img src={listIcon} className="w-5 h-5 bg-cover" alt="" />{" "}
                <span className="text-[18px] ">{lst.serviceName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black bg-opacity-[10%] absolute inset-0 p-6 grid grid-cols-1 justify-between translate-x-[100%] transition-all group-hover:translate-x-0 group-hover:opacity-100 opacity-0">
        <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
          {service.title}
        </h3>
        <p className="text-[16px] ">{service.description}</p>
        <ul className="space-y-3">
          {service.list.map((lst, index) => (
            <li key={index} className="flex gap-x-[18px] items-center">
              <img src={listIcon} className="w-5 h-5 bg-cover" alt="" />{" "}
              <span className="text-[18px]">{lst.serviceName}</span>
            </li>
          ))}
        </ul>
        <Button
          className={cn(
            "w-full h-[52px] text-[16px] font-bold rounded-none font-plus-jakarta-sans "
          )}
        >
          Check it out
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
