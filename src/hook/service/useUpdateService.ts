import { TService } from "@/components/serivces/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useUpdateService = (id: string) => {
    const queryClient = useQueryClient();
    const data = useMutation({
        mutationFn: (serviceData: TService) =>
            axios.patch(`${import.meta.env.VITE_SERVER_URL}/service/${id}`, serviceData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["service"] });
        },
    });

    return data
};

export default useUpdateService;