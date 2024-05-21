import { useQuery } from "@tanstack/react-query"
import { instance, serverState } from "../axios"
import { ICharacteListResponse } from "./type"
import { CharacterListResponse } from "@/constants/character"

const ROUTER = "/characters"

export interface IDataResponse {
    data: ICharacteListResponse
}
export const useCharacterList = (): IDataResponse => {
    if (serverState === "development") return CharacterListResponse
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

    return { data }
}
