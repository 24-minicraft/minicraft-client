import { IEquipment } from "./item.type"
import { IWork } from "./work.type"

export interface ICharacterArticle {
    id: number
    name: string
    health: number
    defense: number
    lucky: number
    work: IWork | null
    equipment_list: IEquipment[]
    last_damage_time: string | null
}
