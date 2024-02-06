import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import uniqid from "uniqid";
import { TServiceName } from "../type";

type TGetServiceName = {
  setServiceNames: Dispatch<SetStateAction<TServiceName[]>>;
  serviceNames: TServiceName[];
};

const GetServiceName = ({ serviceNames, setServiceNames }: TGetServiceName) => {
  const [serviceNameText, setServiceNameText] = useState("");

  const handleAddServiceName = () => {
    if (serviceNameText.length < 1) {
      return alert("Please Write Service name");
    }
    setServiceNames((previousServiceNames) => [
      ...previousServiceNames,
      {
        id: uniqid(),
        serviceName: serviceNameText,
      },
    ]);
  };

  const handleRemoveServiceName = (id: string) => {
    const remainingServiceName = serviceNames.filter(
      (serviceName) => serviceName.id !== id
    );
    setServiceNames(remainingServiceName);
  };
  // const lastServiName = serviceNames[serviceNames.length - 1]?.serviceName;
  return (
    <>
      <div className="space-y-2">
        {serviceNames.length > 0 &&
          serviceNames.map((serviceName, index) => (
            <p
              key={index}
              className="p-2 flex items-center text-left text-sm w-fit gap-3 bg-gray-100 border-gray-200"
            >
              <span className="truncate">{serviceName.serviceName}</span>
              <X
                onClick={() => handleRemoveServiceName(serviceName.id)}
                className="size-5 cursor-pointer"
              />
            </p>
          ))}
      </div>
      <div className="flex gap-6">
        <Input
          // defaultValue={lastServiName || serviceNameText}
          value={serviceNameText}
          onChange={(e) => setServiceNameText(e.target.value)}
          className="rounded-lg bg-gray-100 border border-gray-300 p-2 outline-none"
          type="text"
          placeholder="Service name"
        />
        <Button
          onClick={handleAddServiceName}
          className={cn(
            " text-[16px] font-bold rounded-lg  font-plus-jakarta-sans"
          )}
        >
          Add More
        </Button>
      </div>
    </>
  );
};

export default GetServiceName;
