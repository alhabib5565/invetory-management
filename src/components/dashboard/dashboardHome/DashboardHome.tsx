import ServiceCard from "@/components/serivces/ServiceCard";
import { TService } from "@/components/serivces/type";
import { Button } from "@/components/ui/button";
import useGetAllService from "@/hook/service/useGetAllService";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { TEventData } from "../manageEvent/type";
import useGetAllEvent from "@/hook/event/useGetAllEvent";

const DashboardHome = () => {
  const { data: services } = useGetAllService();

  const { data: events } = useGetAllEvent();

  return (
    <div className="w-full z-0">
      <div className="mt-10 space-y-5">
        <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
          Services
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
          {services?.data.data
            .slice(0, 2)
            .map((serivce: TService, index: number) => (
              <ServiceCard service={serivce} key={index} />
            ))}
          <NavLink
            to={"/dashboard/service"}
            className="w-full h-full min-h-[200px] border grid place-items-center"
          >
            <Button
              variant={"outline"}
              className="border border-[#5A01CB] text-[#5A01CB] hover:text-[#5A01CB] text-[18px]  hover:bg-transparent transition-all flex items-center gap-2 group"
            >
              <span>Show All Service</span>
              <ArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
          </NavLink>
        </div>
      </div>
      {/* event section */}
      <div className="space-y-5 mt-16">
        <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
          Events
        </h3>
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6"
          )}
        >
          {events?.data.data.slice(0, 2).map((event: TEventData) => (
            <div
              key={event._id}
              className=" w-full h-[300px] s space-y-3  gap-5 bg-[#8682B0] bg-opacity-15 p-6  rounded-md relative group"
            >
              <img
                src={event.eventImage}
                className={cn("bg-cover w-full h-[85%]")}
                alt=""
              />
              <h2 className="text-[23px] font-medium truncate">
                {event.eventName}
              </h2>
            </div>
          ))}
          <NavLink
            to={"/dashboard/event"}
            className="w-full  h-[300px] border grid place-items-center"
          >
            <Button
              variant={"outline"}
              className="border border-[#5A01CB] text-[#5A01CB] hover:text-[#5A01CB] text-[18px]  hover:bg-transparent transition-all flex items-center gap-2 group"
            >
              <span>Show All Events</span>
              <ArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
