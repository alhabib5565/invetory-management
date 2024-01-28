import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";

import eventImg1 from "../../assets/Event/eventImg1.png";
import eventImg2 from "../../assets/Event/eventImg2.png";
import eventImg3 from "../../assets/Event/eventImg3.png";
import eventImg4 from "../../assets/Event/eventImg4.png";
import eventImg5 from "../../assets/Event/eventImg5.png";
import eventImg6 from "../../assets/Event/eventImg6.png";
import { cn } from "@/lib/utils";

const events = [
  {
    image: eventImg1,
    eventName: "Event item - 1",
  },
  {
    image: eventImg2,
    eventName: "Event item - 2",
  },
  {
    image: eventImg3,
    eventName: "Event item - 3",
  },
  {
    image: eventImg4,
    eventName: "Event item - 4",
  },
  {
    image: eventImg5,
    eventName: "Event item - 5",
  },
  {
    image: eventImg6,
    eventName: "Event item - 6",
  },
];

const Event = () => {
  return (
    <Container className="mt-20">
      <SectitonHeader
        title="Event Items"
        description="Ut posuere felis arcu tellus tempus in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-12 place-items-center lg:grid-rows-2 gap-5  max-h-[576px] h-full">
        {events.map((event, index) => (
          <div
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
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Event;
