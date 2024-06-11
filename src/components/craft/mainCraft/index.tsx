import Inventory from "@/components/inventory"
import "./style.scss"
import { useInquiredInventory } from "@/apis/item"
import { CraftList } from "../craftList"

export const MainCraft = () => {
    const { data } = useInquiredInventory()
    return (
        <div className="maincraft-container">
            <div className="box">
                <Inventory column={4} row={7} data={data && data.materials} />
                <CraftList />
            </div>
        </div>
    )
}
