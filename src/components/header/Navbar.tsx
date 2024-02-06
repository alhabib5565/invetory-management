import { cn } from "@/lib/utils";
import Container from "../layout/Container";
import Logo from "../shared/Logo";
import { motion } from "framer-motion";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      {/* for large device */}
      <motion.nav
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
        className=" flex justify-between items-center py-6 relative"
      >
        <Logo />
        <ul className="hidden  lg:flex gap-4 items-center">
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to="/dashboard/service"
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Contact
            </a>
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
            <X className="mx-6 size-8" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <a
            href=""
            className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
          >
            Home
          </a>

          <a
            href=""
            className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
          >
            About
          </a>

          <a
            href=""
            className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
          >
            Contact
          </a>
          <Link
            to="/dashboard/service"
            className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px] w-full text-center hover:bg-[#F1F5F9]"
          >
            Dashboard
          </Link>
        </ul>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
