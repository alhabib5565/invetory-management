import AddImage from "@/components/shared/AddImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useAddEvent from "@/hook/event/useAddEvent";
import Swal from "sweetalert2";

const AddEvent = () => {
  const [loading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const { mutateAsync, isPending } = useAddEvent();

  const handleAddEvent = async () => {
    try {
      if (imageUrl && title && date) {
        const eventData = {
          eventName: title,
          eventImage: imageUrl,
          eventDate: date,
        };
        await mutateAsync(eventData);
        setImageUrl("");
        setTitle("");
        Swal.fire({
          title: "Good job!",
          text: "Evemt added successfull",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "try again",
          text: "Every field is required",
          icon: "error",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        title: "try again",
        text: `${error.message}` || "event add failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="p-4 border rounded-md ">
      {isPending ? (
        <div className="max-h-[500px] h-full flex justify-center items-center">
          {" "}
          loading...
        </div>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            type="text"
            placeholder="Write Event Name"
          />
          <Input
            value={date}
            // defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            type="datetime-local"
          />
          <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <div className="flex justify-end">
            <Button
              disabled={loading}
              onClick={handleAddEvent}
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
  );
};

export default AddEvent;
