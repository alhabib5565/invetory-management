import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";
import EventCard from "./EventCard";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import useGetAllEvent from "@/hook/event/useGetAllEvent";
import { TEventData } from "../dashboard/manageEvent/type";

const Event = () => {
  const location = useLocation();
  const pathName = location.pathname === "/dashboard/event";
  const { data: events, isLoading } = useGetAllEvent();
  if (isLoading) {
    <p>loading...</p>;
  }
  // console.log("pathname", pathName);
  return (
    <div id="event-items" className="mt-20">
      <Container className={cn(" overflow-hidden ", { "mt-0 px-0": pathName })}>
        {/* <motion.div ref={ref} style={{ scale: scaleV }}> */}
        {pathName || (
          <SectitonHeader
            title="Event Items"
            description="Ut posuere felis arcu tellus tempus in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          />
        )}
        {/* </motion.div> */}

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 place-items-center lg:grid-rows-2 gap-5  lg:max-h-[576px] h-full "
          )}
        >
          {events?.data.data
            .slice(-6)
            .map((event: TEventData, index: number) => (
              <EventCard
                index={index}
                {...event}
                key={event._id}
                pathName={pathName}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Event;
