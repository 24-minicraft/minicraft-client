import "./style.scss"
import { useNavigate } from "react-router-dom"

export const GoBack = () => {
    const nav = useNavigate()
    return (
        <div className="goBack-container" onClick={() => nav("/game")}>
            <p>⏎</p>
            <p className="text">돌아가기</p>
        </div>
    )
}
