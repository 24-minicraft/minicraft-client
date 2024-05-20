import { ISeeds } from "@/apis/users/type"
import { EmeraldIcon } from "@/assets/icons"
import "./style.scss"

const Seeds = ({ seeds }: ISeeds) => {
    return (
        <div className="seedsBlock">
            <EmeraldIcon />
            <div className="spanBlock">
                <span className="seedText">{seeds}</span>
                <span>시드</span>
            </div>
        </div>
    )
}

export default Seeds
