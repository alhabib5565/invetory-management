import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllEvent = () => {
    const data = useQuery({
        queryKey: ["event"],
        queryFn: () => axios("https://assignment-5-server-lake.vercel.app/event"),
    });
    return data
};

export default useGetAllEvent;