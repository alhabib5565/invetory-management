import { TEventData } from "@/components/dashboard/manageEvent/type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const useAddEvent = () => {
    const queryClient = useQueryClient()
    const event = useMutation({
        mutationFn: (evetnData: TEventData) => axios.post(`${import.meta.env.VITE_SERVER_URL}/event`, evetnData
        ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['event'] })
        }
    })
    return event
}

export default useAddEvent