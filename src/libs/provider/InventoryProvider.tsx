import { type ReactNode, createContext, useRef, useContext } from "react"
import { type StoreApi, useStore } from "zustand"
import { type InventoryStore, createInventory } from "@/stores/inventoryAction"

export const InventoryStoreContext = createContext<StoreApi<InventoryStore> | null>(null)

export interface InventoryStoreProviderProps {
    children: ReactNode
}

export const InventoryStoreContextProvider = ({ children }: InventoryStoreProviderProps) => {
    const storeRef = useRef<StoreApi<InventoryStore>>()
    if (!storeRef.current) {
        storeRef.current = createInventory()
    }

    return <InventoryStoreContext.Provider value={storeRef.current}>{children}</InventoryStoreContext.Provider>
}

export const useInventoryStore = <T,>(selector: (store: InventoryStore) => T): T => {
    const inventoryStoreContext = useContext(InventoryStoreContext)

    if (!inventoryStoreContext) {
        throw new Error(`useInventoryStore must be used within InventoryStoreProvider`)
    }

    return useStore(inventoryStoreContext, selector)
}
