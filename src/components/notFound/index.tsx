import "./style.scss"
import { basicLogo } from "@/assets/logo"

const NotFound = () => {
    return (
        <div className="notFoundBlock">
            <img className="logo" src={basicLogo} />
            <h1>404 Not Found</h1>
            <button className="goHomeButton" onClick={() => (window.location.href = "/")}>
                처음으로 가기
            </button>
        </div>
    )
}

export default NotFound
