import { DefenseIcon, HealthIcon, LuckyIcon } from "@/assets/icons"
import { itemComponent } from "@/libs/constant/itemComponent"
import Inventory from "@/components/inventory"
import "./style.scss"
import { useInquiredEquipment } from "@/apis/item"
import { useInventoryStore } from "@/libs/provider/InventoryProvider"
import { useCharacterDetail, useCharacterEquipment, useCharacterList } from "@/apis/characters"
import { IEquipment } from "@/apis/item/type"
import { useEquipmentModalStore } from "@/libs/provider/EquipmentProvider"

const EquipmentForm = ({ characterId, idx }: { characterId: number | null; idx: number | null }) => {
    const { data: character, isLoading: isLoadingCharacter } = useCharacterList()
    const { data: equipmentData, isLoading: isLoadingEquipment } = useInquiredEquipment()
    const { data: characterDetail, isLoading: isLoadingDetail } = useCharacterDetail(characterId ? characterId : 0)

    const { mutate } = useCharacterEquipment()

    const { closeModal } = useEquipmentModalStore((state) => state)
    const { selectedItem } = useInventoryStore((state) => state)

    if (isLoadingCharacter || isLoadingEquipment || isLoadingDetail) return <div>Loading...</div>
    if (!!!character || characterId === null || idx === null) return null

    const currentCharacter = character.character_list[idx]
    if (!!!currentCharacter) return null

    const selectedEquipment = equipmentData?.equipments[selectedItem] || ({} as IEquipment)

    const updatedCharacter = {
        health: (currentCharacter.health || 0) + (selectedEquipment.health || 0),
        defense: (currentCharacter.defense || 0) + (selectedEquipment.defense || 0),
        lucky: (currentCharacter.lucky || 0) + (selectedEquipment.lucky || 0),
    }

    return (
        <div className="EquipmentModalWrapper">
            <div className="Block">
                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        alt="Character Avatar"
                    />
                    <div className="StatChangeBlock">
                        <div className="StatBlock">
                            <span>현재 장착 중</span>
                            <div>
                                <div>
                                    <HealthIcon /> {currentCharacter.health}
                                </div>
                                <div>
                                    <DefenseIcon /> {currentCharacter.defense}
                                </div>
                                <div>
                                    <LuckyIcon /> {currentCharacter.lucky}
                                </div>
                            </div>
                        </div>
                        <div className="StatBlock">
                            <span>장착 후</span>
                            <div>
                                <div>
                                    <HealthIcon /> {updatedCharacter.health}
                                </div>
                                <div>
                                    <DefenseIcon /> {updatedCharacter.defense}
                                </div>
                                <div>
                                    <LuckyIcon /> {updatedCharacter.lucky}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="EquipmentList">
                        {characterDetail?.equipment_list?.map((e: Omit<IEquipment, "is_use">) => (
                            <div key={e.id}>
                                {itemComponent[e.type][32]}
                                <div className="EquipmentStat">
                                    <div>
                                        <HealthIcon /> {e.health || 0}
                                    </div>
                                    <div>
                                        <DefenseIcon /> {e.defense || 0}
                                    </div>
                                    <div>
                                        <LuckyIcon /> {e.lucky || 0}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="EquipmentInfoBlock">
                        <div className="EquipmentInfoCard">
                            <div className="EquipmentInfo">
                                <div>
                                    {selectedEquipment.type ? itemComponent[selectedEquipment.type][64] : <div></div>}
                                </div>
                            </div>
                            <div className="EquipmentStat">
                                <div>
                                    <HealthIcon /> {selectedEquipment.health || 0}
                                </div>
                                <div>
                                    <DefenseIcon /> {selectedEquipment.defense || 0}
                                </div>
                                <div>
                                    <LuckyIcon /> {selectedEquipment.lucky || 0}
                                </div>
                            </div>
                        </div>
                        <button
                            className="EquipmentInfoButton"
                            onClick={() => {
                                mutate({ characterId, equipmentId: selectedEquipment.id })
                                closeModal()
                            }}
                        >
                            장착
                        </button>
                    </div>
                </div>
            </div>
            <Inventory column={8} row={6} data={equipmentData?.equipments} />
        </div>
    )
}

export default EquipmentForm
