import { basicLogo } from "@/assets/logo"
import "./style.scss"
import { background } from "@/assets/images"

export const StartLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container" style={{ backgroundImage: `url(${background})` }}>
            <div className="wrapper">
                <img src={basicLogo} />
                {children}
            </div>
        </div>
    )
}
