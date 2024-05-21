import { GrassBlockImg, StoneBlockImg } from "@/assets"
import "./style.scss"
import "@/libs/styles/components.scss"
import "@/libs/styles/theme.scss"
import { useNavigate, useSearchParams } from "react-router-dom"
import { AreaType } from "@/types/area.type"

export const areaItem = {
    forest: { name: "초원", itemList: ["나무 원목", "짚"], image: GrassBlockImg },
    mine: { name: "광산", itemList: ["조약돌", "석탄", "구리 광석", "철 광석"], image: StoneBlockImg },
}
export const validArea = Object.keys(areaItem)

interface NowAreaProps {
    select?: boolean
}
export const NowArea = ({ select }: NowAreaProps) => {
    const nav = useNavigate()
    const [searchParams] = useSearchParams()
    const area = validArea.includes(searchParams.get("area") as AreaType)
        ? (searchParams.get("area") as AreaType)
        : "forest"

    return (
        <div className="nowArea-container">
            <div>
                <img src={areaItem[area].image} className="areaImage" />
                {select && (
                    <button className="grayButton" onClick={() => nav(`/selectarea?area=${area}`)}>
                        지역 선택
                    </button>
                )}
            </div>
            <div>
                <p className="title">{areaItem[area].name}</p>
                <ul>
                    {areaItem[area].itemList.map((item) => (
                        <li className="content" key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
