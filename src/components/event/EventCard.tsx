import { cn } from "@/lib/utils";
import useScrolGrow from "@/hook/useScrollGrow";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { TEventData } from "../dashboard/manageEvent/type";
import useDeleteEvent from "@/hook/event/useDeleteEvent";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateEvent from "../dashboard/manageEvent/UpdateEvent";

type TEventCard = TEventData & {
  index: number;
  pathName: boolean;
};

const EventCard = ({
  eventImage,
  eventName,
  index,
  pathName,
  _id,
}: TEventCard) => {
  const { ref, scaleV } = useScrolGrow();
  const { mutate } = useDeleteEvent();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const handleDeleteEvent = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you delete the event",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(_id as string);
        Swal.fire({
          title: "Deleted!",
          text: "The event is deleted",
          icon: "success",
        });
      }
    });
  };

  const openUpdateEventModal = (id: string) => {
    setId(id);
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      ref={ref}
      style={{ scaleX: scaleV }}
      initial="initial"
      whileHover="whileHover"
      key={index}
      className={cn(
        " w-full max-w-[412px] h-[300px] lg:h-full lg:max-h-[576px] bg-[#8682B0] bg-opacity-15 p-6  rounded-md relative group text-left",
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
          src={eventImage}
          className={cn("bg-cover w-full h-[85%]", {
            "h-[92.5%]": index === 2,
          })}
          alt=""
        />
        <h2 className="text-[23px] font-medium truncate">{eventName}</h2>
      </div>
      {pathName === true && (
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
            onClick={() => openUpdateEventModal(_id as string)}
            className={cn(
              "w-full text-[16px] font-bold  font-plus-jakarta-sans rounded-md"
            )}
          >
            Update
          </Button>
          <Button
            onClick={handleDeleteEvent}
            className={cn(
              "w-full text-[16px] font-bold  font-plus-jakarta-sans rounded-md hover:bg-red-500 bg-red-600"
            )}
          >
            Delete
          </Button>
        </motion.div>
      )}
      <UpdateEvent isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
    </motion.div>
  );
};

export default EventCard;
