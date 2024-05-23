import { IEquipment } from "@/types/item.type"

export interface IWorkEndResponse {
    health: number
    materials: IEquipment[]
}

export interface IWorkStartResponse {
    region: string
    duration: number
}
