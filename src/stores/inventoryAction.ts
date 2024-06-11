import { createStore } from "zustand/vanilla"

export type InventoryState = {
    selectedItem: number
}

export type InventoryActions = {
    setSelectedItem: (e: number) => void
}

export type InventoryStore = InventoryActions & InventoryState
export const defaultInitState: InventoryState = { selectedItem: 0 }

export const createInventory = (initState: InventoryState = defaultInitState) => {
    return createStore<InventoryStore>()((set) => ({
        ...initState,
        setSelectedItem: (e: number) => set(() => ({ selectedItem: e })),
    }))
}
