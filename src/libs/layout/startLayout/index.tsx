import "./style.scss"
import { background } from "@/assets/images"

export const StartLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container" style={{ background: `url(${background}) no-repeat center/cover` }}>
            <div className="wrapper">{children}</div>
        </div>
    )
}
