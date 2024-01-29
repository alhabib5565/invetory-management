import Container from "../layout/Container";
import Logo from "../shared/Logo";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <Container>
      <motion.nav
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.3,
          // delay: 4,
          type: "spring",
          // stiffness: 100,
        }}
        className="flex justify-between items-center py-6"
      >
        <Logo />
        <ul className="flex gap-4 items-center">
          <li>
            <a
              href=""
              className="px-2 py-3 tracking-[0.5px] text-[16px] font-medium leading-[24px]"
            >
              Home
            </a>
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
      </motion.nav>
    </Container>
  );
};

export default Navbar;
