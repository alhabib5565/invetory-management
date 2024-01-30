import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { imageUpload } from "@/utils/imageUpload";
import { Upload, X } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Textarea } from "@/components/ui/textarea";
const ManageService = () => {
  const [image, setImage] = useState<File | null>();
  const [serviceNames, setServiceNames] = useState<
    {
      id: string;
      serviceName: string;
    }[]
  >([]);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  useEffect(() => {
    const handleGetImageUrl = async () => {
      if (image) {
        const data = await imageUpload(image);
        console.log(data);
        setImageUrl(data.display_url);
        setImage(null);
      }
    };
    handleGetImageUrl();
  }, [image]);

  const [serviceNameText, setServiceNameText] = useState("");

  const handleAddServiceName = () => {
    if (serviceNameText.length < 1) {
      return alert("Please Write Service name");
    }
    setServiceNames((previousServiceNames) => [
      ...previousServiceNames,
      {
        id: uuidv4(),
        serviceName: serviceNameText,
      },
    ]);

    setServiceNameText("");
  };

  const handleRemoveServiceName = (id: string) => {
    const remainingServiceName = serviceNames.filter(
      (serviceName) => serviceName.id !== id
    );
    setServiceNames(remainingServiceName);
  };

  const handleAddService = () => {
    if (imageUrl && title && description && serviceNames.length > 0) {
      const serviceData = {
        image: imageUrl,
        list: serviceNames,
        title,
        description,
      };
      setDescription("");
      setTitle("");
      console.log(serviceData);
    } else {
      alert("please all fillup the form");
    }
  };

  return (
    <div className="max-w-3xl mx-auto border p-6 space-y-6 mt-10">
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

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="rounded-lg flex flex-col items-center justify-center w-full h-[200px] border-2 border-gray-300 border-dashed cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          {imageUrl ? (
            <img className="w-full h-full bg-contain" src={imageUrl} alt="" />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                Choose Image,
                <span className="font-semibold"> Click to upload</span>
              </p>
            </div>
          )}
          <input
            onChange={handleImageChange}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="flex justify-end">
        <Button
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
