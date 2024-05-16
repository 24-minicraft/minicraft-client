import { GameLayout } from "@/libs/layout/gameLayout"

const GamePage = () => {
    return (
        <GameLayout
            seedNode={<div>seed 수집 컴포넌트</div>}
            characterListNode={<div>캐릭터 리스트</div>}
            regionNode={<div> 지역 선택</div>}
            settingNode={<div>설정</div>}
        >
            <p>자원 수집</p>
        </GameLayout>
    )
}

export default GamePage
