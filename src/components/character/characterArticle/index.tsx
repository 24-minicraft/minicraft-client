import { ICharacterArticle } from "@/types/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets/icons"
import "./style.scss"
import { userImage } from "@/libs/constant/userImage"

interface ICharacterArticleProps {
    data: ICharacterArticle
    idx: number
}

export const CharacterArticle = ({ data, idx }: ICharacterArticleProps) => {
    return (
        <div className="characterArticle-container">
            <div className="state">
                <img src={userImage[idx]} className="character" />

                <div className="infoContainer">
                    <p className="characterArticle-titleLarge">{data.name}</p>

                    <div className="info">
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{data.health}</p>
                            <HealthIcon />
                            <div className="plus">
                                <p className="plus">
                                    (
                                    {Math.floor(100 / 60)
                                        .toString()
                                        .padStart(2, "0")}
                                    :{100 % 60}
                                </p>
                                <HealthPlusIcon />
                                <p className="plus">)</p>
                            </div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{data.defense}</p>
                            <DefenseIcon />
                        </div>
                        <div className="characterArticle-iconContainer">
                            <p className="characterArticle-titleMedium">{data.lucky}</p>
                            <LuckyIcon />
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttonContainer">
                <button className="greenButton">
                    <CollectionIcon />
                    파견
                </button>
                <button className="greenButton">
                    <BattleIcon />
                    전투
                </button>
            </div>
        </div>
    )
}
