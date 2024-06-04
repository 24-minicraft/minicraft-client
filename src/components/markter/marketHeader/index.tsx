import SeedsContainer from "@/containers/seeds"
import "./style.scss"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const MarketHeader = ({
    marketType,
    setMarketType,
}: {
    marketType: "sell" | "buy"
    setMarketType: React.Dispatch<React.SetStateAction<"sell" | "buy">>
}) => {
    const nav = useNavigate()

    useEffect(() => {
        nav(`/market?market-type=${marketType}`)
    }, [marketType])
    return (
        <div className="marketheader-container">
            <SeedsContainer />
            <select onChange={(e) => setMarketType(e.target.value as "sell" | "buy")}>
                <option selected={marketType === "sell"} value={"sell"}>
                    판매
                </option>
                <option selected={marketType === "buy"} value={"buy"}>
                    구매
                </option>
            </select>
        </div>
    )
}
