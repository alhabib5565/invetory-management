import Container from "../layout/Container";
import Navbar from "./Navbar";

import blue from "../../assets/image/header/Blue.png";
import orange from "../../assets/image/header/orange.png";
import purple from "../../assets/image/header/Purple.png";
import yellow from "../../assets/image/header/Yellow.png";

import Hero from "./Hero";
import HeroCards from "./HeroCards";
const Header = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: [
          `url("${orange}")`,
          `url("${yellow}")`,
          `url("${blue}")`,
          `url("${purple}")`,
        ].join(", "),

        backgroundPosition: [
          "left top",
          "right top",
          "right bottom",
          "left bottom",
        ].join(", "),
        backgroundRepeat: "no-repeat",
      }}
      className="pb-10"
    >
      <Navbar />
      <Container className="pt-32">
        <Hero />
        <HeroCards />
      </Container>
    </div>
  );
};

export default Header;
