import OutsideClickHandler from "react-outside-click-handler"
import "./style.scss"

interface EquipmentModalProps {
    children: React.ReactNode
    visible: boolean
    onClose: () => void
}

const EquipmentModal = ({ children, visible, onClose }: EquipmentModalProps) => {
    if (!visible) return null
    return (
        <OutsideClickHandler
            display="contents"
            onOutsideClick={() => {
                onClose()
            }}
        >
            <div className="EquipmentModalBlock">{children}</div>
        </OutsideClickHandler>
    )
}

export default EquipmentModal
