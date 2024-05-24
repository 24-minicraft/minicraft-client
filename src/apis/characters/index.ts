import { useQuery } from "@tanstack/react-query"
import { instance, serverState } from "../axios"
import { ICharacterListResponse } from "./type"
import { CharacterListResponse } from "@/libs/constant/character"

const ROUTER = "/characters"

export interface IDataResponse {
    data: ICharacterListResponse
    data: ICharacterListResponse
}

export const useCharacterList = (): IDataResponse => {
    if (serverState === "development") return CharacterListResponse

    const response = async () => {
        const { data } = await instance.get(`${ROUTER}/list`)
        return data
    }

    const { isError, data, error, isLoading } = useQuery({
        queryKey: ["characterList"],
        queryFn: response,
        retryOnMount: false,
        retry: 0,
    })

    if (isError) {
        console.error("캐릭터 목록 에러", error)
        return CharacterListResponse
    }

    return { data, isLoading }
}
