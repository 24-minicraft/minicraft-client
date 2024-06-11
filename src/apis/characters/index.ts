import { useMutation, useQuery } from "@tanstack/react-query"
import { instance } from "../axios"
import { IDataResponse, IEquipmentParam } from "./type"
import { CharacterListResponse } from "@/libs/constant/character"
import { IEquipment } from "../item/type"

const ROUTER = "characters"

export const useCharacterList = (): IDataResponse => {
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
        return CharacterListResponse
    }

    return { data, isLoading }
}

export const useCharacterDetail = (id: number) => {
    const response = async () => {
        const { data } = await instance.get<{ equipment_list: Omit<IEquipment, "is_use">[] }>(`${ROUTER}/${id}`)
        return data
    }

    const { isError, data, error, isLoading } = useQuery({
        queryKey: ["characterDetail", id],
        queryFn: response,
        retryOnMount: false,
        retry: 0,
    })

    return { data, isLoading }
}

export const useCharacterEquipment = () => {
    const response = async (params: IEquipmentParam) => {
        return await instance.patch(`${ROUTER}?characterId=${params.characterId}&equipmentId=${params.equipmentId}`)
    }

    return useMutation({
        mutationFn: response,
        mutationKey: ["equipCharacter"],
    })
}
