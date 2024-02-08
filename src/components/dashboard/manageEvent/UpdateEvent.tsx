import AddImage from "@/components/shared/AddImage";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUpdateEvent from "@/hook/event/useUpdateEvent";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";

type TUpdateService = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const UpdateEvent = ({ isOpen, setIsOpen, id }: TUpdateService) => {
  const [loading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const isPending = false;

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/event/${id}`).then((response) => {
      const data = response.data.data;
      setTitle(data.eventName);
      setImageUrl(data.eventImage);
      setDate(data.eventDate);
    });
  }, [id]);

  const { mutateAsync } = useUpdateEvent(id);

  const handleUpdateEvent = async () => {
    console.log({ loading, imageUrl, title, date });
    try {
      const eventData = {
        eventName: title,
        eventImage: imageUrl,
        eventDate: date as string,
      };
      console.log(eventData);
      await mutateAsync(eventData);
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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Update Event">
      <div className="p-4 border rounded-md ">
        {isPending ? (
          <div className="max-h-[500px] h-full flex justify-center items-center">
            {" "}
            loading...
          </div>
        ) : (
          <div className="space-y-4 max-w-2xl mx-auto">
            <Input
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              type="text"
              placeholder="Write Event Name"
            />
            <Input
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              type="datetime-local"
            />
            <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />

            <div className="flex justify-end">
              <Button
                disabled={loading}
                onClick={handleUpdateEvent}
                className={cn(
                  "w-[195px] h-[52px] text-[16px] font-bold rounded-lg font-plus-jakarta-sans"
                )}
              >
                Add Event
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default UpdateEvent;
