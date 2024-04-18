import { GrassBlockImg } from "@/assets"
import "./style.scss"
import { ChangeAreaType } from "@/types/area.type"

interface SelectAreaProps {
    data: ChangeAreaType
}

export const SelectArea = ({ data }: SelectAreaProps) => {
    return (
        <div className="container">
            <div>
                <img src={GrassBlockImg} /> {/* 명세 나오는거 보고 수정해야할 듯 */}
                <button className="grayButton">지역 선택</button>
            </div>
            <div className="items">
                <p className="title">{data.name}</p>
                <ul>
                    {data.itemList.map((item, index) => (
                        <li key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
