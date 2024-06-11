import { ICharacterArticle } from "@/types/character.type"

export interface ICharacterListResponse {
    character_list: ICharacterArticle[]
}

export interface IDataResponse {
    isLoading: boolean
    data: ICharacterListResponse
}

export interface IEquipmentParam {
    characterId: number
    equipmentId: number
}
