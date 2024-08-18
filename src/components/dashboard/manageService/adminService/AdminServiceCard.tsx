import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import listIcon from "../../../../assets/service/card/listIcon.png";
import { TAdminServiceCard } from "../type";
import useDeleteService from "@/hook/service/useDeleteService";
import { useState } from "react";
import UpdateService from "../updateService/UpdateService";
import Swal from "sweetalert2";

const AdminServiceCard = ({ service }: { service: TAdminServiceCard }) => {
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data, mutate } = useDeleteService();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you delete the service",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
        Swal.fire({
          title: "Deleted!",
          text: "The service is deleted",
          icon: "success",
        });
      }
    });
    console.log("delete service", data);
  };

  const openUpdateServiceModal = (id: string) => {
    setIsOpen(!isOpen);
    setId(id);
  };

  return (
    <div className="w-full border p-4 rounded-xl flex flex-col lg:flex-row gap-4 lg:items-center  bg-[#5A01CB/5">
      {/* image  */}
      <div className="w-full h-full lg:w-[40%]">
        <img
          className="w-full h-full max-h-[400px] rounded-xl"
          src={service.image}
          alt=""
        />
      </div>

      {/* text */}
      <div className="w-full lg:w-[60%] text-left space-y-4">
        <h3 className="text-[32px] font-bold leading-[110%] tracking-[0.05em]">
          {service.title}
        </h3>
        <p className="text-[16px] ">{service.description}</p>
        <ul className="space-y-3">
          {service.list.map((lst, index) => (
            <li key={index} className="flex gap-x-[18px] items-center">
              <img src={listIcon} className="w-5 h-5 bg-cover" alt="" />{" "}
              <span className="text-[18px]">{lst.serviceName}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 justify-end">
          <Button
            onClick={() => openUpdateServiceModal(service._id)}
            className={cn(
              "w-full h-[52px] text-[16px] font-bold  font-plus-jakarta-sans rounded-md"
            )}
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(service._id)}
            className={cn(
              "w-full h-[52px] text-[16px] font-bold  font-plus-jakarta-sans rounded-md hover:bg-red-500 bg-red-600"
            )}
          >
            Delete
          </Button>
        </div>
      </div>
      {id && <UpdateService id={id} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default AdminServiceCard;
