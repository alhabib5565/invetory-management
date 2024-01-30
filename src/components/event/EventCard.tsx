import { cn } from "@/lib/utils";
import useScrolGrow from "@/hook/useScrollGrow";
import { motion } from "framer-motion";

type TEvent = {
  event: {
    image: string;
    eventName: string;
  };
  index: number;
};

const EventCard = ({ event, index }: TEvent) => {
  const { textRef, scaleV } = useScrolGrow();

  return (
    <motion.div
      ref={textRef}
      style={{ scaleX: scaleV }}
      key={index}
      className={cn(
        " w-full max-w-[412px] h-[300px] lg:h-full lg:max-h-[576px] bg-[#8682B0] bg-opacity-15 p-6 space-y-3 rounded-md",
        {
          " lg:col-span-4": index === 0,
        },
        {
          "lg:col-span-4": index === 1,
        },
        {
          "lg:col-span-4 lg:row-span-2": index === 2,
        },
        {
          "lg:col-span-2": index === 3,
        },
        {
          "lg:col-span-2": index === 4,
        },
        {
          "lg:col-span-4": index === 5,
        }
      )}
    >
      <img
        src={event.image}
        className={cn("bg-cover w-full h-[85%]", {
          "h-[92.5%]": index === 2,
        })}
        alt=""
      />
      <h2 className="text-[23px] font-medium">{event.eventName}</h2>
    </motion.div>
  );
};

export default EventCard;
