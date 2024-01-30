import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex relative">
      {/* sidebar */}
      <Sidebar />

      <div className=" w-full min-h-screen h-full text-center">
        {" "}
        this is dashboard{" "}
      </div>
    </div>
  );
};

export default DashboardLayout;
