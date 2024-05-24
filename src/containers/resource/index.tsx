import { useCollectItem } from "@/apis/item"
import { ItemType } from "@/apis/item/type"
import Resource from "@/components/resource"
import { itemComponent } from "@/libs/constant/itemComponent"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const ResourceContainer = () => {
    const [searchParams] = useSearchParams()
    const area = searchParams.get("area")
    const { mutate } = useCollectItem()

    const [loadingForestStates, setLoadingForestStates] = useState({
        LOG: true,
        STRAW: true,
    })

    const [loadingMineStates, setLoadingMineStates] = useState({
        COBBLESTONE: true,
        COAL: true,
        COPPER_ORE: true,
        IRON_ORE: true,
    })

    const handleClick = (type: ItemType, time: number) => {
        if (area === "forest") {
            setLoadingForestStates((prevState) => ({ ...prevState, [type]: false }))
            setTimeout(() => {
                mutate(type)
                setLoadingForestStates((prevState) => ({ ...prevState, [type]: true }))
            }, time * 1000)
        } else if (area === "mine") {
            setLoadingMineStates((prevState) => ({ ...prevState, [type]: false }))
            setTimeout(() => {
                mutate(type)
                setLoadingMineStates((prevState) => ({ ...prevState, [type]: true }))
            }, time * 1000)
        }
    }

    return area === "forest" ? (
        <div
            style={{
                display: "flex",
                gap: "300px",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Resource
                item={itemComponent["LOG"][128]}
                onclick={() => handleClick("LOG", 4)}
                loading={loadingForestStates["LOG"]}
            />
            <Resource
                item={itemComponent["STRAW"][128]}
                onclick={() => handleClick("STRAW", 10)}
                loading={loadingForestStates["STRAW"]}
            />
        </div>
    ) : (
        <div style={{ display: "flex", gap: "300px", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Resource
                item={itemComponent["COBBLESTONE"][128]}
                onclick={() => handleClick("COBBLESTONE", 2)}
                loading={loadingMineStates["COBBLESTONE"]}
            />
            <Resource
                item={itemComponent["COAL"][128]}
                onclick={() => handleClick("COAL", 5)}
                loading={loadingMineStates["COAL"]}
            />
            <Resource
                item={itemComponent["COPPER_ORE"][128]}
                onclick={() => handleClick("COPPER_ORE", 15)}
                loading={loadingMineStates["COPPER_ORE"]}
            />
            {/* <Resource
                item={itemComponent["IRON_ORE"][128]}
                onclick={() => handleClick("IRON_ORE", 10)}
                loading={loadingMineStates["IRON_ORE"]}
            /> */}
        </div>
    )
}

export default ResourceContainer
