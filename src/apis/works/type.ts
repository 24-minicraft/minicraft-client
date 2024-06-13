import { ItemType } from "../item/type"

export interface IWorkStartResponse {
    region: string
    duration: number
}

export interface IMaterials {
    type: ItemType
    amount: number
}

export interface IWorkEndResponse {
    health: number
    materials: IMaterials[]
}
