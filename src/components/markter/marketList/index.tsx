import { DefenseIcon, EmeraldIcon, HealthIcon, LuckyIcon } from "@/assets/icons"
import "./style.scss"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { useMarket, useMarketList } from "@/apis/market"
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
            {marketType === "sell" && data?.materials ? (
                data?.materials?.map((item, index) => <SellArticle item={item} key={index} />)
            ) : marketType === "buy" && data?.equipments ? (
                data?.equipments?.map((item, index) => <BuyArticle item={item} key={index} />)
            ) : (
                <p className="title">{marketType === "sell" ? "판매" : "구매"} 목록이 없음</p>
            )}
        </div>
    )
}

const SellArticle = ({ item }: { item: MaterialType }) => {
    const { mutate } = useMarket()
    return (
        <div className="marketlist-article">
            <div className="header">
                <div className="type">{item.type}</div>
                <div className="price">
                    <EmeraldIcon />
                    {item.price}
                </div>
            </div>
            <button
                className="greenButton"
                onClick={() => {
                    mutate({
                        materialType: item.type,
                        type: "sell",
                    })
                }}
            >
                판매
            </button>
        </div>
    )
}

const BuyArticle = ({ item }: { item: EquipmentsType }) => {
    const { mutate } = useMarket()

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
            <button
                className="greenButton"
                disabled={item.price > 100}
                onClick={() => {
                    mutate({
                        materialType: item.type,
                        type: "buy",
                    })
                }}
            >
                구매
            </button>
        </div>
    )
}
