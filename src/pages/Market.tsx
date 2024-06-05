import { GoBack } from "@/components/common/goBack"
import { MainMarket } from "@/components/markter/mainMarket"
import { GameLayout } from "@/libs/layout/gameLayout"

const MarketPage = () => {
    return (
        <GameLayout settingNode={<GoBack />}>
            <MainMarket />
        </GameLayout>
    )
}

export default MarketPage
