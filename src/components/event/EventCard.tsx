import { cn } from "@/lib/utils";
import useScrolGrow from "@/hook/useScrollGrow";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

type TEvent = {
  event: {
    image: string;
    eventName: string;
  };
  index: number;
};

const EventCard = ({ event, index }: TEvent) => {
  const { ref, scaleV } = useScrolGrow();

  return (
    <motion.div
      ref={ref}
      style={{ scaleX: scaleV }}
      initial="initial"
      whileHover="whileHover"
      key={index}
      className={cn(
        " w-full max-w-[412px] h-[300px] lg:h-full lg:max-h-[576px] bg-[#8682B0] bg-opacity-15 p-6  rounded-md relative group",
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
      <div className=" w-full h-full space-y-3">
        <img
          src={event.image}
          className={cn("bg-cover w-full h-[85%]", {
            "h-[92.5%]": index === 2,
          })}
          alt=""
        />
        <h2 className="text-[23px] font-medium truncate">{event.eventName}</h2>
      </div>
      <motion.div
        variants={{
          initial: {
            scaleX: 0,
          },
          whileHover: {
            scaleX: 1,
            transition: { duration: 0.05 },
          },
        }}
        className="absolute inset-0  bg-black  bg-opacity-50 rounded-md flex flex-col justify-end gap-2 p-6"
      >
        <Button
          // onClick={() => openUpdateServiceModal(service._id)}
          className={cn(
            "w-full text-[16px] font-bold  font-plus-jakarta-sans rounded-md"
          )}
        >
          Update
        </Button>
        <Button
          // onClick={() => handleDelete(service._id)}
          className={cn(
            "w-full text-[16px] font-bold  font-plus-jakarta-sans rounded-md hover:bg-red-500 bg-red-600"
          )}
        >
          Delete
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
