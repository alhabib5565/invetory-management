import useGetAllService from "@/hook/service/useGetAllService";
import AdminServiceCard from "./AdminServiceCard";
import { TAdminServiceCard } from "../type";

const AdminServices = () => {
  const { data: services, isLoading, isError } = useGetAllService();

  if (isError || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {services?.data.data.map((service: TAdminServiceCard) => (
        <AdminServiceCard service={service} key={service._id} />
      ))}
    </div>
  );
};

export default AdminServices;
