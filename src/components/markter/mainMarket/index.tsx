import Inventory from "@/components/inventory"
import { MarketHeader } from "../marketHeader"
import "./style.scss"
import { useInquiredInventory } from "@/apis/item"
import { MarketList } from "../marketList"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export const MainMarket = () => {
    const { data } = useInquiredInventory()

    const [searchParams] = useSearchParams()
    const [marketType, setMarketType] = useState<"sell" | "buy">(
        (searchParams.get("market-type") as "sell" | "buy") ?? "sell",
    )
    return (
        <div className="mainmarket-container">
            <div className="box">
                <MarketHeader marketType={marketType} setMarketType={setMarketType} />
                <div className="bag">
                    <Inventory column={4} row={7} data={data && data?.materials} />
                    <MarketList marketType={marketType} />
                </div>
            </div>
        </div>
    )
}
