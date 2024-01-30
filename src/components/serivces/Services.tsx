import yellow from "../../assets/service/Yellow.png";
import orange from "../../assets/service/orange.png";

import serviceImg1 from "../../assets/service/card/serviceImg1.png";
import serviceImg2 from "../../assets/service/card/serviceImg2.png";
import serviceImg3 from "../../assets/service/card/serviceImg3.jpg";
import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";
import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      image: serviceImg1,
      title: "Our Services",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      list: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pas access all lecture",
      ],
    },
    {
      image: serviceImg2,
      title: "Organization event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      list: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pas access all lecture",
      ],
    },
    {
      image: serviceImg3,
      title: "Wedding event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.",
      list: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
        "One day pas access all lecture",
      ],
    },
  ];

  const { ref, scaleV } = useScrolGrow();
  return (
    <div
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
          {services.map((serivce, index) => (
            <ServiceCard serivce={serivce} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
