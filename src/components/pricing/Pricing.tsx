import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";

import icon1 from "../../assets/pricing/Icons (1).png";
import icon2 from "../../assets/pricing/Icons (2).png";
import icon3 from "../../assets/pricing/Icons.png";
import checkBox from "../../assets/pricing/Check Box.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="mt-20">
      <Container>
        <SectitonHeader
          className="max-w-[1086px] pb-[80px]"
          title="Explore our pricing plans"
          description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />

        <div className="flex gap-5">
          {prices.map((price, index) => (
            <div
              key={index}
              className={`max-w-[412px] max-h-[748px] h-full w-full border-t-4 rounded-[20px]  border-[${price.color}] bg-gray-100 bg-opacity-50 relative`}
            >
              {price.recommended && (
                <p
                  className={`text-sm w-[145px] h-[32px] mx-auto bg-[#0B63E5] flex justify-center items-center -mt-[32px] rounded-t-lg text-white uppercase`}
                >
                  Recommended
                </p>
              )}
              <div className="divide-y-2 ">
                <div className="space-y-6  p-4 md:p-6 ">
                  <div className="flex justify-between items-center">
                    <img className="h-20 w-20" src={price.image} alt="" />
                    <h2
                      className={`text-[48px] font-bold text-[${price.color}]`}
                    >
                      ${price.price}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[24px] font-semibold text-[#061C3D]">
                      {price.title}
                    </h4>
                    <p className="text-[16px] text-[#42526B]">
                      {price.description}
                    </p>
                  </div>

                  <Button
                    variant={"outline"}
                    className="gap-3 border-[#0B63E5] border-2 rounded-[7px] text-[#0B63E5] hover:text-white hover:bg-[#0B63E5] text-[16px] font-bold"
                  >
                    Get this package{" "}
                    <ArrowRight className="h-6 w-6"></ArrowRight>
                  </Button>
                </div>
                <ul className="p-4 md:p-6 space-y-3">
                  {price.lists.map((listItem, index) => (
                    <li
                      key={index}
                      className={cn("flex gap-x-[18px] items-center", {
                        "opacity-45": !listItem.active,
                      })}
                    >
                      <img className="w-6 h-6 bg-cover" src={checkBox} alt="" />{" "}
                      <span className="text-[16px] text-[#42526B]">
                        {listItem.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
