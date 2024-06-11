import EquipmentForm from "@/components/equipment/form"
import EquipmentModal from "@/components/equipment/modal"
import { useEquipmentModalStore } from "@/libs/provider/EquipmentProvider"

const EquipmentContainer = () => {
    const { visible, idx, characterId, closeModal } = useEquipmentModalStore((state) => state)

    return (
        <EquipmentModal visible={visible} onClose={closeModal}>
            <EquipmentForm characterId={characterId} idx={idx} />
        </EquipmentModal>
    )
}
export default EquipmentContainer
