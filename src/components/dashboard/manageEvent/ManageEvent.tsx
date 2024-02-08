import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import Event from "@/components/event/Event";
import AddEvent from "./AddEvent";

const ManageEvent = () => {
  const tabs = ["Preview", "Add Service"];

  return (
    <div className="w-full max-w-5xl px-2 py-16 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#5A01CB] p-1">
          {tabs.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                cn(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60",

                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Event />
          </Tab.Panel>
          <Tab.Panel>
            <AddEvent />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ManageEvent;
