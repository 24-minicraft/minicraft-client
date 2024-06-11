import { GoBack } from "@/components/common/goBack"
import { MainCraft } from "@/components/craft/mainCraft"
import { GameLayout } from "@/libs/layout/gameLayout"

export const CraftPage = () => {
    return (
        <GameLayout settingNode={<GoBack />}>
            <MainCraft />
        </GameLayout>
    )
}
