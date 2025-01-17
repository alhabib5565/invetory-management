import yellow from "../../assets/service/Yellow.png";
import orange from "../../assets/service/orange.png";

import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";
import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";
import ServiceCard from "./ServiceCard";
import { TService } from "./type";
import useGetAllService from "@/hook/service/useGetAllService";

const Services = () => {
  const { data: services, isLoading, isError } = useGetAllService();

  const { ref, scaleV } = useScrolGrow();

  if (isError && isLoading) {
    return;
  }
  return (
    <div
      id="service"
      style={{
        backgroundImage: [`url("${orange}")`, `url("${yellow}")`].join(", "),
        backgroundPosition: ["right top", "left top"].join(", "),
      }}
      className="h-full bg-no-repeat bg-cover pb-10"
    >
      <Container>
        <motion.div
          style={{
            scale: scaleV,
          }}
          ref={ref}
        >
          <SectitonHeader
            title="Our Services"
            description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
          {services?.data.data
            .slice(-3)
            .map((serivce: TService, index: number) => (
              <ServiceCard service={serivce} key={index} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
