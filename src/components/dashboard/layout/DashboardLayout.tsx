import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex relative">
      {/* sidebar */}
      <Sidebar />

      <div className=" w-full min-h-screen h-full text-center lg:ml-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
