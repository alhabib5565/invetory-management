import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteService = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (id: string) =>
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/service/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["service"] });
        },
    });
    return mutation
}

export default useDeleteService