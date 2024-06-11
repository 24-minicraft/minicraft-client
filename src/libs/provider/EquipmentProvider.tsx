
import { type ReactNode, createContext, useRef, useContext } from "react"
import { type StoreApi, useStore } from "zustand"
import { type EquipmentModalStore, createEquipmentModal } from "@/stores/action"

export const EquipmentModalStoreContext = createContext<StoreApi<EquipmentModalStore> | null>(null)

export interface EquipmentModalStoreProviderProps {
    children: ReactNode
}

export const EquipmentModalStoreContextProvider = ({ children }: EquipmentModalStoreProviderProps) => {
    const storeRef = useRef<StoreApi<EquipmentModalStore>>()
    if (!storeRef.current) {
        storeRef.current = createEquipmentModal()
    }

    return <EquipmentModalStoreContext.Provider value={storeRef.current}>{children}</EquipmentModalStoreContext.Provider>
}

export const useEquipmentModalStore = <T,>(selector: (store: EquipmentModalStore) => T): T => {
    const equipmentModalStoreContext = useContext(EquipmentModalStoreContext)

    if (!equipmentModalStoreContext) {
        throw new Error(`useEquipmentModalStore must be used within EquipmentModalStoreProvider`)
    }

    return useStore(equipmentModalStoreContext, selector)
}
