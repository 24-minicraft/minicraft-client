import { DefenseIcon, EmeraldIcon, HealthIcon, LuckyIcon } from "@/assets/icons"
import "./style.scss"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { useMarketList } from "@/apis/market"
import { EquipmentsType, MaterialType } from "@/apis/market/type"

type DataType = {
    materials?: MaterialType[]
    equipments?: EquipmentsType[]
}
export const MarketList = ({ marketType }: { marketType: "sell" | "buy" }) => {
    const [searchParams] = useSearchParams()
    const { data } = useMarketList(marketType)

    return (
        <div className="marketlist-container">
            {marketType}
            {marketType === "sell" && data?.data?.materials
                ? data?.data.materials?.map((item, index) => <SellArticle item={item} key={index} />)
                : marketType === "buy" &&
                  data?.data.equipments &&
                  data?.data.equipments?.map((item, index) => <BuyArticle item={item} key={index} />)}
        </div>
    )
}

const SellArticle = ({ item }: { item: MaterialType }) => {
    return (
        <div className="marketlist-article">
            <div className="header">
                <div className="type">{item.type}</div>
                <div className="price">
                    <EmeraldIcon />
                    {item.price}
                </div>
            </div>
            <button className="greenButton">판매</button>
        </div>
    )
}

const BuyArticle = ({ item }: { item: EquipmentsType }) => {
    return (
        <div className="marketlist-article">
            <div className="header">
                <div className="type">{item.type}</div>
                <div className="price">
                    <EmeraldIcon />
                    {item.price}
                </div>
            </div>
            <div className="ability">
                <div className="icon">
                    <HealthIcon /> {item.health}
                </div>
                <div className="icon">
                    <DefenseIcon /> {item.defense}
                </div>
                <div className="icon">
                    <LuckyIcon /> {item.lucky}
                </div>
            </div>
            <button className="greenButton">구매</button>
        </div>
    )
}
