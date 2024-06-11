import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { IEquipment, IInventory, ItemType } from "./type"

const ROUTER = "item"

export const useInquiredInventory = () => {
    const response = async () => {
        const { data } = await instance.get<{ materials: IInventory[] }>(`${ROUTER}/inventory`)
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
        return await instance.put(`${ROUTER}/${type}`)
    }
    return useMutation({
        mutationFn: response,
        mutationKey: ["collectItem"],

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inquiredInventory"] })
        },
        onError: () => {},
    })
}

export const useInquiredEquipment = () => {
    const response = async () => {
        const { data } = await instance.get<{ equipments: IEquipment[] }>(`${ROUTER}/equipment`)
        const filteredData = data.equipments.filter((equipment) => equipment.is_use === false)
        return { equipments: filteredData }
    }

    const { isError, data, error, isLoading } = useQuery({
        queryKey: ["inquiredEquipment"],
        queryFn: response,
    })

    if (isError) {
        console.error("장비 조회 에러", error)
    }

    return { data, isLoading }
}
