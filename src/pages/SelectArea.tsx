import { NowArea } from "@/components/area/nowArea"
import { SelectAreaMap } from "@/components/area/selectAreaMap"
import { GoBack } from "@/components/common/goBack"
import { GameLayout } from "@/libs/layout/gameLayout"

export const SelectAreaPage = () => {
    return (
        <GameLayout settingNode={<GoBack />} seedNode={<NowArea />}>
            <SelectAreaMap />
        </GameLayout>
    )
}
