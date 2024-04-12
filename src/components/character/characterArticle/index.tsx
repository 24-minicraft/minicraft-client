import { ICharacterArticle } from "@/types/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets/icons"
import "./style.scss"

interface ICharacterArticleProps {
    data: ICharacterArticle
}

export const CharacterArticle = ({ data }: ICharacterArticleProps) => {
    return (
        <div className="container">
            <div className="state">
                <img src={data.image} className="character" />

                <div className="infoContainer">
                    <p className="titleLarge">{data.name}</p>

                    <div className="info">
                        <div className="iconContainer">
                            <p className="titleMedium">{data.health}</p>
                            <HealthIcon />
                            <div className="plus">
                                <p className="plus">
                                    (
                                    {Math.floor(data.time / 60)
                                        .toString()
                                        .padStart(2, "0")}
                                    :{data.time % 60}
                                </p>
                                <HealthPlusIcon />
                                <p className="plus">)</p>
                            </div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="iconContainer">
                            <p className="titleMedium">{data.defense}</p>
                            <DefenseIcon />
                        </div>
                        <div className="iconContainer">
                            <p className="titleMedium">{data.luck}</p>
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
