import { TServiceData } from "@/components/dashboard/manageService/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useAddService = () => {
    const queryClient = useQueryClient();
    const addService = useMutation({
        mutationFn: (data: TServiceData) =>
            axios.post("https://assignment-5-server-lake.vercel.app/service", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["service"] });
        },
    });
    return addService
};

export default useAddService;