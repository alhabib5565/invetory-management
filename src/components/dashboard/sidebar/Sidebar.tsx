import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const menuItems = [
    {
      linkName: "Dashboard",
      link: "home",
    },
    {
      linkName: "Event",
      link: "event",
    },
    {
      linkName: "Service",
      link: "service",
    },
    {
      linkName: "Recent Event",
      link: "recent-event",
    },
    {
      linkName: "home",
      link: "/",
    },
  ];

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          stiffness: 100,
        },
      },
    },
  };

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.nav
      initial={!menuOpen ? { clipPath: "circle(30px at 40px 40px)" } : ""}
      animate={
        menuOpen
          ? { clipPath: "circle(100vh at 50px 50px)" }
          : { clipPath: "circle(30px at 40px 40px)" }
      }
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      className={cn(
        "max-w-[300px] w-full h-screen fixed top-0 z-50 left-0 translate-x-[0] bg-[#5A01CB] p-6"
        //   { "translate-x-0": menuOpen }
      )}
    >
      <Menu
        onClick={() => setMenuOpen(!menuOpen)}
        className="size-8 lg:hidden cursor-pointer"
      />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 mt-10"
      >
        {menuItems.map((menuItem, index) => (
          <motion.li
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#F1F5F9] px-4 py-2 rounded-md text-center"
            key={index}
          >
            <NavLink
              className={({ isActive }) =>
                cn("w-full block", { "text-[#5A01CB]": isActive })
              }
              key={index}
              to={menuItem.link}
            >
              {menuItem.linkName}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Sidebar;
