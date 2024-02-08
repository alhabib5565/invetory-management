import { TEventData } from "@/components/dashboard/manageEvent/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useUpdateEvent = (id: string) => {
    const queryClient = useQueryClient();
    const data = useMutation({
        mutationFn: (eventData: TEventData) =>
            axios.patch(`${import.meta.env.VITE_SERVER_URL}/event/${id}`, eventData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["event"] });
        },
    });

    return data
};

export default useUpdateEvent;