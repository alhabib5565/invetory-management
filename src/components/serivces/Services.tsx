import yellow from "../../assets/service/Yellow.png";
import orange from "../../assets/service/orange.png";

import serviceImg1 from "../../assets/service/card/serviceImg1.png";
import serviceImg2 from "../../assets/service/card/serviceImg2.png";
import serviceImg3 from "../../assets/service/card/serviceImg3.jpg";
import listIcon from "../../assets/service/card/listIcon.png";
import Container from "../layout/Container";
import SectitonHeader from "../shared/SectitonHeader";

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

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: [`url("${orange}")`, `url("${yellow}")`].join(", "),
        backgroundPosition: ["right top", "left top"].join(", "),
      }}
      className="h-full bg-no-repeat bg-cover pb-10"
    >
      <Container>
        <SectitonHeader
          title="Our Services"
          description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
          {services.map((serivce, index) => (
            <div
              key={index}
              className="max-w-[412px] p-6 w-full max-h-[570px] h-full bg-black bg-opacity-[5%] rounded-md space-y-6"
            >
              <img
                src={serivce.image}
                className="h-[253px] w-full bg-contain"
                alt=""
              />
              <div className="space-y-3">
                <h3 className="text-[32px] font-extrabold leading-[110%] tracking-[0.05em]">
                  {serivce.title}
                </h3>
                <ul className="space-y-3">
                  {serivce.list.map((lst, index) => (
                    <li key={index} className="flex gap-x-[18px] items-center">
                      <img src={listIcon} className="w-5 h-5 bg-cover" alt="" />{" "}
                      <span>{lst}</span>
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

export default Services;
