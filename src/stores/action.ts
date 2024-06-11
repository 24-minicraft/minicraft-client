import { createStore } from "zustand/vanilla"

export type EquipmentModalState = {
    visible: boolean
    idx: number | null
    characterId: number | null
}

export type EquipmentModalActions = {
    openModal: (e: number, c: number) => void
    closeModal: () => void
}

export type EquipmentModalStore = EquipmentModalActions & EquipmentModalState
export const defaultInitState: EquipmentModalState = { visible: false, characterId: null, idx: null }

export const createEquipmentModal = (initState: EquipmentModalState = defaultInitState) => {
    return createStore<EquipmentModalStore>()((set) => ({
        ...initState,
        closeModal: () => set(() => ({ visible: false, characterId: null, idx: null })),
        openModal: (e, c) => set(() => ({ visible: true, characterId: e, idx: c })),
    }))
}
