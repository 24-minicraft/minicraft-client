export type ItemType =
    | "LOG"
    | "STRAW"
    | "WOLF_TOOTH"
    | "RAW_RABBIT"
    | "RAW_BOAR"
    | "COBBLESTONE"
    | "COAL"
    | "COPPER_ORE"
    | "IRON_ORE"
    | "LEATHER_CLOTHES"
    | "CHAIN_ARMOR"
    | "COPPER_ARMOR"
    | "BRONZE_ARMOR"
    | "IRON_ARMOR"
    | "STONE"
    | "COPPER_INGOT"
    | "IRON_INGOT"
    | "PLANKS"
    | "STICK"
    | "WOOL_TOOL_SET"
    | "STONE_TOOL_SET"
    | "COPPER_TOOL_SET"
    | "IRON_TOOL_SET"
    | "LOAD"
    | "WOLF_TALISMAN"

export interface IInventory {
    type: ItemType
    amount: number
}
