import "./style.scss"
import { bg } from "@/assets/images"

interface GameLayoutProps {
    children?: React.ReactNode
    seedNode?: React.ReactNode //  돈
    characterListNode?: React.ReactNode // 캐릭터 리스트
    regionNode?: React.ReactNode // 지역
    settingNode?: React.ReactNode // 설정
}
export const GameLayout = ({ children, seedNode, characterListNode, regionNode, settingNode }: GameLayoutProps) => {
    return (
        <div style={{ background: `url(${bg}) no-repeat center/cover` }} className="gameLayout-container">
            <div>
                <div>{seedNode}</div>
                <div>{settingNode}</div>
            </div>
            <div>{children}</div>
            <div>
                <div>{regionNode}</div>
                <div>{characterListNode}</div>
            </div>
        </div>
    )
}
