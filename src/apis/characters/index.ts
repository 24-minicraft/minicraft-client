import { useQuery } from "@tanstack/react-query"
import { instance } from "../axios"
import { ICharacterArticle } from "@/types/character.type"
import { ICharacteListResponse } from "./type"

const ROUTER = "/characters"

export const useCharacterList = (): ICharacteListResponse => {
    const response = async () => {
        return (await instance.get(`${ROUTER}/list`)).data
    }

    const { isError, data, error } = useQuery({
        queryKey: ["characterList"],
        queryFn: response,
    })

    if (isError) {
        console.error("캐릭터 목록 에러", error)
    }

    return data
}
