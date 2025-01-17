import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import AddService from "./addService/AddService";
import AdminServices from "./adminService/AdminServices";

export default function ManageService() {
  const tabs = ["Preview", "Add Service"];

  return (
    <div className="w-full max-w-4xl px-2 py-16 sm:px-0 mx-auto">
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
            <AdminServices />
          </Tab.Panel>
          <Tab.Panel>
            <AddService />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
