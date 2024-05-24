import { NowArea } from "@/components/area/nowArea"
import { CharacterList } from "@/components/character/characterList"
import Inventory from "@/components/inventory"
import ResourceContainer from "@/containers/resource"
import SeedsContainer from "@/containers/seeds"
import { GameLayout } from "@/libs/layout/gameLayout"

const GamePage = () => {
    return (
        <GameLayout
            seedNode={
                <>
                    <SeedsContainer />
                    <Inventory
                        column={4}
                        row={8}
                        data={[
                            {
                                type: "LOG",
                                amount: 8,
                            },
                            {
                                type: "STICK",
                                amount: 12,
                            },
                            {
                                type: "STRAW",
                                amount: 22,
                            },
                            {
                                type: "COAL",
                                amount: 24,
                            },
                            {
                                type: "COBBLESTONE",
                                amount: 64,
                            },
                        ]}
                    />
                </>
            }
            characterListNode={<CharacterList />}
            regionNode={<NowArea select />}
            settingNode={<div>설정</div>}
        >
            <ResourceContainer />
        </GameLayout>
    )
}

export default GamePage
