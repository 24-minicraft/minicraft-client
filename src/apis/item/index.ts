import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { IInventory, ItemType } from "./type"

const ROUTER = "item"

export const useInquiredInventory = () => {
    const response = async () => {
        const { data } = await instance.get<{ material: IInventory[] }>(`${ROUTER}/inventory`)
        return data
    }

    const { isError, data, error } = useQuery({
        queryKey: ["inquiredInventory"],
        queryFn: response,
    })

    if (isError) {
        console.error("인벤토리 조회 에러", error)
    }

    return { data }
}

export const useCollectItem = () => {
    const queryClient = useQueryClient()
    const response = async (type: ItemType) => {
        return await instance.patch(`${ROUTER}/${type}`)
    }
    return useMutation({
        mutationFn: response,
        mutationKey: ["collectItem"],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inquiredInventory"] })
        },
        onError: () => {
            //error 메세지
        },
    })
}
