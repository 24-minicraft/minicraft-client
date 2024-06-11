import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { MarketListResponse } from "./type"

const ROUTER = "market"

export const useMarketList = (type: "sell" | "buy") => {
    const response = async () => {
        if (type === "sell") {
            const { data } = await instance.get<MarketListResponse>(`${ROUTER}/materials`)
            return data
        } else {
            const { data } = await instance.get<MarketListResponse>(`${ROUTER}/equipments`)
            return data
        }
    }

    const { data, error } = useQuery({
        queryKey: ["marketList", type],
        queryFn: response,
    })

    if (data?.equipments === undefined || data?.materials === undefined) {
        console.error("마켓 조회 에러", error)
    }

    return { data }
}

export const useMarket = () => {
    const queryClient = useQueryClient()
    const response = async (materialType: string, type: "sell" | "buy") => {
        if (type === "sell") {
            const { data } = await instance.put(`${ROUTER}/${type}/${materialType}`)
            return data
        } else {
            const { data } = await instance.post(`${ROUTER}/${type}/${materialType}`)
            return data
        }
    }

    return useMutation({
        mutationKey: ["sellMarket"],
        mutationFn: (data: { materialType: string; type: "sell" | "buy" }) => response(data.materialType, data.type),
        onError: () => {},
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inquiredInventory"] })
            queryClient.invalidateQueries({ queryKey: ["inquiredSeeds"] })
        },
        retry: 0,
    })
}
