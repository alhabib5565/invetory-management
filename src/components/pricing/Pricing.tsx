import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";

import icon1 from "../../assets/pricing/Icons (1).png";
import icon2 from "../../assets/pricing/Icons (2).png";
import icon3 from "../../assets/pricing/Icons.png";
import PricingPlanCard from "./PricingPlanCard";

import { motion } from "framer-motion";
import useScrolGrow from "@/hook/useScrollGrow";

const prices = [
  {
    color: "#F249C8",
    image: icon3,
    price: 21,
    title: "Standard",
    description:
      "Upgrade your social portfolio with a stunning profile & enhanced shots.",
    lists: [
      {
        active: true,
        text: "User Dashboard",
      },
      {
        active: true,
        text: "Post 3 Ads per week",
      },
      {
        active: true,
        text: "Multiple images & videos",
      },
      {
        active: false,
        text: "Basic customer support",
      },
      {
        active: false,
        text: "Featured ads",
      },
      {
        active: false,
        text: "Special ads badge",
      },
      {
        active: false,
        text: "Call to Action in Every Ads",
      },
      {
        active: false,
        text: "Max 12 team members",
      },
    ],
  },
  {
    recommended: true,
    color: "#0B63E5",
    image: icon1,
    price: 49,
    title: "Premium",
    description:
      "Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec vitae purus lorem. ",
    lists: [
      {
        active: true,
        text: "User Dashboard",
      },
      {
        active: true,
        text: "Post 3 Ads per week",
      },
      {
        active: true,
        text: "Multiple images & videos",
      },
      {
        active: true,
        text: "Basic customer support",
      },
      {
        active: true,
        text: "Featured ads",
      },
      {
        active: true,
        text: "Special ads badge",
      },
      {
        active: false,
        text: "Call to Action in Every Ads",
      },
      {
        active: false,
        text: "Max 12 team members",
      },
    ],
  },
  {
    color: "#E54545",
    image: icon2,
    price: 21,
    title: "Business",
    description:
      "In ornare ligula lorem, sit amet faucibus velit vehicula eget. ",
    lists: [
      {
        active: true,
        text: "User Dashboard",
      },
      {
        active: true,
        text: "Post 3 Ads per week",
      },
      {
        active: true,
        text: "Multiple images & videos",
      },
      {
        active: true,
        text: "Basic customer support",
      },
      {
        active: true,
        text: "Featured ads",
      },
      {
        active: true,
        text: "Special ads badge",
      },
      {
        active: true,
        text: "Call to Action in Every Ads",
      },
      {
        active: true,
        text: "Max 12 team members",
      },
    ],
  },
];

const Pricing = () => {
  const { textRef, scaleV } = useScrolGrow();
  return (
    <div className="mt-20">
      <Container>
        <motion.div ref={textRef} style={{ scale: scaleV }}>
          <SectitonHeader
            className="max-w-[1086px] lg:pb-[80px]"
            title="Explore our pricing plans"
            description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5">
          {prices.map((price, index) => (
            <PricingPlanCard price={price} key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
