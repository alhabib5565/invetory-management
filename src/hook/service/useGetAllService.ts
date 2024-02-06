import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllService = () => {
    const data = useQuery({
        queryKey: ["service"],
        queryFn: () => axios("https://assignment-5-server-lake.vercel.app/service"),
    });
    return data
};

export default useGetAllService;