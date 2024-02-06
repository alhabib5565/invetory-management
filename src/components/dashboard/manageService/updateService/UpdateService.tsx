import Modal from "@/components/ui/Modal";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TServiceName } from "../type";
import GetServiceName from "../addService/GetServiceName";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AddImage from "@/components/shared/AddImage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TService } from "@/components/serivces/type";
import Swal from "sweetalert2";
import useUpdateService from "@/hook/service/useUpdateService";

type TUpdateService = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const UpdateService = ({ isOpen, setIsOpen, id }: TUpdateService) => {
  const [service, setService] = useState<TService>();
  const [serviceNames, setServiceNames] = useState<TServiceName[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading] = useState(false);

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/service/${id}`).then(
      (response) => {
        const data = response.data.data;
        setService(data);
        setImageUrl(data.image);
        setServiceNames(data.list);
      }
    );
  }, [id]);

  const { mutateAsync } = useUpdateService(id);

  const handleUpdate = async () => {
    try {
      const serviceData = {
        title: title || (service?.title as string),
        description: description || (service?.description as string),
        image: imageUrl,
        list: serviceNames,
      };
      console.log(serviceData);
      await mutateAsync(serviceData);
      Swal.fire({
        title: "Good job!",
        text: "service update successfull",
        icon: "success",
      });
      setIsOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        title: "Good job!",
        text: `${error.message}` || "Service update failed",
        icon: "error",
      });
      setIsOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Update service">
      <div className="max-w-4xl mx-auto border p-6 space-y-6 rounded-md ">
        <GetServiceName
          serviceNames={serviceNames}
          setServiceNames={setServiceNames}
        />

        <Input
          defaultValue={service?.title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          type="text"
          placeholder="Write Service Titel"
        />

        <Textarea
          defaultValue={service?.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write Service description"
          className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        />

        <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <div className="flex justify-end">
          <Button
            disabled={loading}
            onClick={handleUpdate}
            className={cn(
              "w-[195px] h-[52px] text-[16px] font-bold rounded-lg font-plus-jakarta-sans"
            )}
          >
            Explore
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateService;
