import { useInquiredInventory } from "@/apis/item"
import { NowArea } from "@/components/area/nowArea"
import { CharacterList } from "@/components/character/characterList"
import Inventory from "@/components/inventory"
import ResourceContainer from "@/containers/resource"
import SeedsContainer from "@/containers/seeds"
import { GameLayout } from "@/libs/layout/gameLayout"

const GamePage = () => {
    const { data } = useInquiredInventory()

    return (
        <GameLayout
            seedNode={
                <>
                    <SeedsContainer />
                    <Inventory column={5} row={10} data={data && data?.materials} />
                </>
            }
            characterListNode={<CharacterList />}
            regionNode={<NowArea select />}
            // settingNode={<SettingIcon />}
        >
            <ResourceContainer />
        </GameLayout>
    )
}

export default GamePage
