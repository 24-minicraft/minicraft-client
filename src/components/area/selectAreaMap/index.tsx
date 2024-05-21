import "./style.scss"
import { SelectArea } from "../selectArea"

export const SelectAreaMap = () => {
    return (
        <div className="selectareamap-container">
            <SelectArea type={"forest"} />
            <SelectArea type={"mine"} />
        </div>
    )
}
