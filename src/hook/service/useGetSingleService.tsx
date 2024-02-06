import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSingleService = (id: string) => {
  console.log(id, "id");
  const service = useQuery({
    queryKey: ["service"],
    queryFn: () => axios(`${import.meta.env.VITE_SERVER_URL}/service/${id}`),
  });
  return service;
};
export default useGetSingleService;
