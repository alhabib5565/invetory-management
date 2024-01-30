import Container from "../layout/Container";
import logo1 from "../../assets/companyLogo/logo(1).png";
import logo2 from "../../assets/companyLogo/logo(2).png";
import logo3 from "../../assets/companyLogo/logo(3).png";
import logo4 from "../../assets/companyLogo/logo(4).png";
import logo5 from "../../assets/companyLogo/logo(5).png";
import logo6 from "../../assets/companyLogo/logo(6).png";
import logo7 from "../../assets/companyLogo/logo(7).png";
import logo8 from "../../assets/companyLogo/logo(8).png";
import logo9 from "../../assets/companyLogo/logo(9).png";
import logo10 from "../../assets/companyLogo/logo(10).png";

import { useInView } from "framer-motion";
import { useRef } from "react";

const ValuableClient = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const logoImages = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  const transitionStyle = {
    transform: isInView ? "translateY(0px)" : "translateY(200px)",
    transitionDuration: "500ms",
    opacity: isInView ? 1 : 0,
  };

  return (
    <div ref={ref} style={transitionStyle}>
      <Container className="max-[1200px]">
        <h1 className="text-center pt-[68px]">Our Valuable client</h1>
        <div className="grid grid-cols-3 lg:grid-cols-5 justify-between py-12 lg:py-[84px] gap-x-5 md:gap-x-0  gap-y-12 lg:gap-y-[84px]">
          {logoImages.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ValuableClient;
