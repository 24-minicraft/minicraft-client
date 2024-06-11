import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../axios"
import { IWorkEndResponse, IWorkStartResponse } from "./type"
import { IWork } from "@/types/work.type"
import { ICharacterArticle } from "@/types/character.type"

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
        onMutate: async (newWork: startProps) => {
            await queryClient.cancelQueries({ queryKey: ["characterList"] })

            const previousCharacterList = queryClient.getQueryData<{ character_list: ICharacterArticle[] }>([
                "characterList",
            ])

            queryClient.setQueryData<{ character_list: ICharacterArticle[] }>(["characterList"], (oldData) => {
                if (!oldData || !Array.isArray(oldData.character_list)) {
                    return { character_list: [] }
                }

                const updatedCharacterList = oldData.character_list.map((character) =>
                    character.id === newWork.characterId
                        ? {
                              ...character,
                              work: {
                                  type: newWork.type,
                                  start_time: new Date().toISOString(),
                                  duration: newWork.param.duration,
                                  region: newWork.param.region,
                              } as IWork,
                          }
                        : character,
                )

                return { character_list: updatedCharacterList }
            })

            return { previousCharacterList }
        },
        onError: (error, newWork, context) => {
            queryClient.setQueryData<{ character_list: ICharacterArticle[] }>(
                ["characterList"],
                context?.previousCharacterList,
            )
            console.error("workStart 에러", error)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["characterList"] })
        },
        onSuccess: () => {},
    })
}
