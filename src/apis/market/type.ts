export interface MarketListResponse {
    materials?: MaterialType[]
    equipments?: EquipmentsType[]
}

export interface MaterialType {
    type: string
    price: number
}
export interface EquipmentsType {
    type: string
    health: number
    defense: number
    lucky: number
    price: number
}
