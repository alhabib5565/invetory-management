import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";

import eventImg1 from "../../assets/Event/eventImg1.png";
import eventImg2 from "../../assets/Event/eventImg2.png";
import eventImg3 from "../../assets/Event/eventImg3.png";
import eventImg4 from "../../assets/Event/eventImg4.png";
import eventImg5 from "../../assets/Event/eventImg5.png";
import eventImg6 from "../../assets/Event/eventImg6.png";

import EventCard from "./EventCard";

import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";
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
  const { ref, scaleV } = useScrolGrow();
  return (
    <Container className="mt-20 overflow-hidden">
      {/* <motion.div ref={ref} style={{ scale: scaleV }}> */}
      <motion.div ref={ref} style={{ scale: scaleV }}>
        <SectitonHeader
          title="Event Items"
          description="Ut posuere felis arcu tellus tempus in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />
      </motion.div>
      {/* </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 place-items-center lg:grid-rows-2 gap-5  lg:max-h-[576px] h-full ">
        {events.map((event, index) => (
          <EventCard index={index} event={event} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Event;
