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
const ValuableClient = () => {
  return (
    <Container className="max-[1200px]">
      <h1 className="text-center pt-[68px]">Our Valuable client</h1>
      <div className="grid grid-cols-5 justify-between py-[84px] gap-x-5 md:gap-x-0 gap-y-[84px]">
        {logoImages.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </Container>
  );
};

export default ValuableClient;
