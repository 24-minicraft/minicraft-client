import { LogItem, StrawItem } from "@/assets/items"
import Resource from "@/components/resource"

const ResourceContainer = () => {
    return (
        <div style={{ display: "flex", gap: "300px", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Resource item={<LogItem size={128} />} />
            <Resource item={<StrawItem size={128} />} />
        </div>
    )
}

export default ResourceContainer
