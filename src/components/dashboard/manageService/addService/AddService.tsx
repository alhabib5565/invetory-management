import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import AddImage from "@/components/shared/AddImage";
import GetServiceName from "./GetServiceName";
import { TServiceData, TServiceName } from "../type";
import AddImage from "@/components/shared/AddImage";
const ManageService = () => {
  //state
  const [serviceNames, setServiceNames] = useState<TServiceName[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();
  const { mutateAsync, data } = useMutation({
    mutationFn: (data: TServiceData) =>
      axios.post("https://assignment-5-server-lake.vercel.app/service", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["service"] });
    },
  });

  const handleAddService = () => {
    if (imageUrl && title && description && serviceNames.length > 0) {
      setLoading(true);
      const serviceData = {
        image: imageUrl,
        list: serviceNames,
        title,
        description,
      };
      mutateAsync(serviceData);
      setDescription("");
      setTitle("");
      setImageUrl("");
      setServiceNames([]);
      setLoading(false);
      console.log(serviceData);
      console.log(data);
    } else {
      setLoading(false);
      alert("please all fillup the form");
    }
  };

  return (
    <div className="max-w-4xl mx-auto border p-6 space-y-6 rounded-md ">
      <GetServiceName
        serviceNames={serviceNames}
        setServiceNames={setServiceNames}
      />

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        type="text"
        placeholder="Write Service Titel"
      />

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write Service description"
        className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
      />

      <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <div className="flex justify-end">
        <Button
          disabled={loading}
          onClick={handleAddService}
          className={cn(
            "w-[195px] h-[52px] text-[16px] font-bold rounded-lg font-plus-jakarta-sans"
          )}
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default ManageService;
