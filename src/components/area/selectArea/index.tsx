import { AreaType } from "@/types/area.type"
import "./style.scss"
import { areaItem } from "../nowArea"
import { useNavigate } from "react-router-dom"

interface SelectAreaProps {
    type: AreaType
}

export const SelectArea = ({ type }: SelectAreaProps) => {
    const nav = useNavigate()
    return (
        <div className="selectArea-container">
            <div>
                <img src={areaItem[type].image} /> {/* 명세 나오는거 보고 수정해야할 듯 */}
                <button
                    className="grayButton"
                    onClick={() => {
                        nav(`/game?area=${type}`)
                    }}
                >
                    지역 선택
                </button>
            </div>
            <div className="items">
                <p className="title">{areaItem[type].name}</p>
                <ul>
                    {areaItem[type].itemList.map((item, index) => (
                        <li key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
