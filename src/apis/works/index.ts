import { useMutation } from "@tanstack/react-query"
import { instance } from "../axios"
import { IWorkEndResponse, IWorkStartResponse } from "./type"

const ROUTER = "/works"

interface IDataResponse {
    data: IWorkEndResponse
    isSuccess: boolean
    mutate: ({ character_id }: { character_id: number }) => void
}
export const useWorkEnd = (): IDataResponse => {
    const response = async (character_id: number) => {
        const { data } = await instance.delete(`${ROUTER}/end?character_id=${character_id}`)
        return data
    }

    const { data, isSuccess, mutate } = useMutation({
        mutationKey: ["workEnd"],
        mutationFn: ({ character_id }: { character_id: number }) => response(character_id),
        retry: 0,
        onError: (error) => {
            console.error("workEnd 에러", error)
        },
    })

    return { data, isSuccess, mutate }
}

interface IDataStartResponse {
    data: IWorkStartResponse
    isSuccess: boolean
    mutate: ({ character_id, type }: startProps) => void
}

interface startProps {
    character_id: number
    type: "WAR" | "COLLECTION" | null
}

export const useWorkStart = (): IDataStartResponse => {
    const response = async ({ character_id, type }: startProps) => {
        console.log("type", type)
        const { data } = await instance.post(`${ROUTER}/start?character_id=${character_id}&type=${type}`)
        return data
    }

    const { data, isSuccess, mutate } = useMutation({
        mutationKey: ["workStart"],
        mutationFn: ({ character_id, type }: startProps) => response({ character_id, type }),
        retry: 0,
        onError: (error) => {
            console.error("workStart 에러", error)
        },
    })

    return { data, isSuccess, mutate }
}
