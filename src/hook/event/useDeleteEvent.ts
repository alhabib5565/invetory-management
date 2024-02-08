import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (id: string) =>
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/event/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["event"] });
        },
    });
    return mutation
}

export default useDeleteEvent