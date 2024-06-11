import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { CraftListResponse } from "@/components/craft/craftList"

const ROUTER = "craft"

export interface IDataResponse {
    isLoading: boolean
    data: CraftListResponse
}

export const useCraftList = (): IDataResponse => {
    const response = async () => {
        const { data } = await instance.get(`${ROUTER}/`)
        return data
    }

    const { isError, data, error, isLoading } = useQuery({
        queryKey: ["craftlist"],
        queryFn: response,
        retryOnMount: false,
        retry: 0,
    })

    if (isError) {
        console.error("제작 목록 에러", error)
        return { isLoading: false, data: { recipes: [] } }
    }

    return { data, isLoading }
}

export const useCraft = () => {
    const queryClient = useQueryClient()
    const response = async (type: string) => {
        const { data } = await instance.patch(`${ROUTER}/${type}`)
        return data
    }

    return useMutation({
        mutationKey: ["craft"],
        mutationFn: (data: { type: string }) => response(data.type),
        onError: () => {},
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inquiredInventory"] })
        },
    })
}
