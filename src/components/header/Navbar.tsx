import { cn } from "@/lib/utils";
import Container from "../layout/Container";
import Logo from "../shared/Logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const menuItems = [
    {
      linkName: "Home",
      sectionName: "home",
    },
    {
      linkName: "Service",
      sectionName: "service",
    },
    {
      linkName: "Event Items",
      sectionName: "event-items",
    },
    {
      linkName: "Pricing",
      sectionName: "pricing",
    },
  ];

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  return (
    <div
      className={cn({
        "fixed z-10 bg-white bg-opacity-90 top-0 left-0 right-0 duration-300 transition-all border-b":
          sticky,
      })}
    >
      <Container>
        {/* for large device */}
        <nav className=" flex justify-between items-center py-6 relative">
          <Logo />
          <ul className="hidden  lg:flex gap-4 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                activeClass="bg-[#F1F5F9] rounded z-20"
                to={item.sectionName}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="px-2 py-3 tracking-[0.5px] text-[16px] cursor-pointer font-medium leading-[24px]"
              >
                {item.linkName}
              </Link>
            ))}

            <li>
              <NavLink
                to="/dashboard/home"
                className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* for small device */}

          <MenuIcon
            className="size-8 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
            className={cn(
              "w-[250px] h-full lg:hidden flex flex-col fixed top-0 right-0  bg-white shadow-md z-10 py-6 translate-x-[100%]  transition-all",
              {
                "translate-x-[0]": menuOpen,
              }
            )}
          >
            <div className=" flex justify-end">
              <X
                className="mx-6 size-8"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            {menuItems.map((item, index) => (
              <Link
                onClick={() => setMenuOpen(!menuOpen)}
                key={index}
                activeClass="bg-[#F1F5F9] rounded z-20"
                to={item.sectionName}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
              >
                {item.linkName}
              </Link>
            ))}

            <NavLink
              to="/dashboard/home"
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
