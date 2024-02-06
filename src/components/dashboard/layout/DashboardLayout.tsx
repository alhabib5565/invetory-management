import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
const DashboardLayout = () => {
  return (
    <div className="flex relative">
      {/* sidebar */}
      <Sidebar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=" w-full min-h-screen h-full text-center lg:ml-[300px]"
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default DashboardLayout;
