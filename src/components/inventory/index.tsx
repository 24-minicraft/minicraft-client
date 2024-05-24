import { useState } from "react"
import { itemComponent } from "@/libs/constant/itemComponent"
import "./style.scss"
import { IInventory } from "@/apis/item/type"

interface IInventoryProps {
    row: number
    column: number
    data?: IInventory[]
}

const Inventory = ({ row, column, data }: IInventoryProps) => {
    const [selectedItem, setSelectedItem] = useState<number>(0)
    const gridTemplateColumns = `repeat(${column}, minmax(48px, 1fr))`
    const gridTemplateRows = `repeat(${row}, minmax(48px, auto))`
    const totalCells = row * column
    const filledCells = data ? data.length : 0
    const emptyCells = totalCells - filledCells

    return (
        <div className="inventory-container" style={{ gridTemplateColumns, gridTemplateRows }}>
            {data &&
                data.map((item, index) => (
                    <div
                        key={item.type}
                        className={index === selectedItem ? `inventory-item-selected` : `inventory-item`}
                        onClick={() => setSelectedItem(index)}
                    >
                        {itemComponent[item.type][32]}
                        <span className="item-num">{item.amount}</span>
                    </div>
                ))}
            {[...Array(emptyCells)].map((_, index) => (
                <div
                    key={`empty-${index}`}
                    className={index + filledCells === selectedItem ? `inventory-item-selected` : `inventory-item`}
                    onClick={() => setSelectedItem(index + filledCells)}
                ></div>
            ))}
        </div>
    )
}

export default Inventory
