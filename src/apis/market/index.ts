import { useQuery } from "@tanstack/react-query"
import { instance } from "../axios"
import { MarketListResponse } from "./type"

const ROUTER = "market"

export const useMarketList = (type: "sell" | "buy") => {
    const response = async () => {
        if (type === "sell") {
            const { data } = await instance.get<{ data: MarketListResponse }>(`${ROUTER}/materials`)
            return data
        } else {
            const { data } = await instance.get<{ data: MarketListResponse }>(`${ROUTER}/equipments`)
            return data
        }
    }

    const { data, error } = useQuery({
        queryKey: ["marketList", type],
        queryFn: response,
    })

    if (data?.data?.equipments === undefined || data?.data?.materials === undefined) {
        console.error("마켓 조회 에러", error)
    }

    return { data }
}
