import { itemComponent } from "@/libs/constant/itemComponent"
import "./style.scss"
import { IEquipment, IInventory } from "@/apis/item/type"
import { useInventoryStore } from "@/libs/provider/InventoryProvider"

interface IInventoryProps {
    row: number
    column: number
    data?: IInventory[] | IEquipment[]
}

const isInventoryItem = (item: IEquipment | IInventory): item is IInventory => {
    return (item as IInventory).amount !== undefined
}

const Inventory = ({ row, column, data }: IInventoryProps) => {
    const { selectedItem, setSelectedItem } = useInventoryStore((state) => state)
    const gridTemplateColumns = `repeat(${column}, minmax(48px, 1fr))`
    const gridTemplateRows = `repeat(${row}, minmax(48px, auto))`
    const totalCells = row * column
    const filledCells = data ? data.length : 0
    const emptyCells = totalCells - filledCells

    return (
        <div className="inventory-container" style={{ gridTemplateColumns, gridTemplateRows }}>
            {data &&
                data.map((item: IEquipment | IInventory, index) => (
                    <div
                        key={`${item.type}-${index}`}
                        className={index === selectedItem ? "inventory-item-selected" : "inventory-item"}
                        onClick={() => setSelectedItem(index)}
                    >
                        {itemComponent[item.type][32]}
                        {isInventoryItem(item) && <span className="item-num">{item.amount}</span>}
                    </div>
                ))}
            {Array.from({ length: emptyCells }, (_, index) => (
                <div
                    key={`empty-${index}`}
                    className={index + filledCells === selectedItem ? "inventory-item-selected" : "inventory-item"}
                    onClick={() => setSelectedItem(index + filledCells)}
                />
            ))}
        </div>
    )
}

export default Inventory
