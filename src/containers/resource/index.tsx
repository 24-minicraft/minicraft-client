import { useCollectItem } from "@/apis/item"
import { ItemType } from "@/apis/item/type"
import Resource from "@/components/resource"
import { itemComponent } from "@/libs/constant/itemComponent"
import { useState } from "react"

const ResourceContainer = () => {
    const { mutate } = useCollectItem()
    const [loadingStates, setLoadingStates] = useState({
        LOG: true,
        STRAW: true,
    })

    const handleClick = (type: ItemType, time: number) => {
        setLoadingStates((prevState) => ({ ...prevState, [type]: false }))
        setTimeout(() => {
            mutate(type)
            setLoadingStates((prevState) => ({ ...prevState, [type]: true }))
        }, time * 1000)
    }

    return (
        <div style={{ display: "flex", gap: "300px", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Resource
                item={itemComponent["LOG"][128]}
                onclick={() => handleClick("LOG", 4)}
                loading={loadingStates["LOG"]}
            />
            <Resource
                item={itemComponent["STRAW"][128]}
                onclick={() => handleClick("STRAW", 10)}
                loading={loadingStates["STRAW"]}
            />
        </div>
    )
}

export default ResourceContainer
