import { IEquipment } from "./item.type"
import { IWork } from "./work.type"

export interface ICharacterArticle {
    id: number
    name: string
    health: number
    defense: number
    lucky: number
    work: IWork
    equipment_list: IEquipment[]
    lastDamageTime: string | null
}
