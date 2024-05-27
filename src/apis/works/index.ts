import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { IWorkEndResponse, IWorkStartResponse } from "./type"

const ROUTER = "works"

export const useWorkEnd = () => {
    const queryClient = useQueryClient()
    const response = async (characterId: number) => {
        const { data } = await instance.delete(`${ROUTER}/end?characterId=${characterId}`)
        return data
    }

    return useMutation({
        mutationKey: ["workEnd"],
        mutationFn: ({ characterId }: { characterId: number }) => response(characterId),
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["inquiredInventory"] })
            queryClient.invalidateQueries({ queryKey: ["characterList"] })
        },
        onError: (error) => {
            console.error("workEnd 에러", error)
        },
    })
}

interface startProps {
    characterId: number
    type: "BATTLE" | "COLLECTION" | null
    param: {
        region: string
        duration: number
    }
}

export const useWorkStart = () => {
    const queryClient = useQueryClient()
    const response = async ({ characterId, type, param }: startProps) => {
        return await instance.post(`${ROUTER}/start?characterId=${characterId}&type=${type}`, param)
    }

    return useMutation({
        mutationKey: ["workStart"],
        mutationFn: response,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["characterList"] })
        },
        onError: (error) => {
            console.error("workStart 에러", error)
        },
    })
}
