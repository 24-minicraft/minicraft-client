import { CharacterArticleType } from "@/type/character.type"
import { BattleIcon, CollectionIcon, DefenseIcon, HealthIcon, HealthPlusIcon, LuckyIcon } from "@/assets"
import "./style.scss"

interface CharacterArticleProps {
    data: CharacterArticleType
}

export const CharacterArticle = ({ data }: CharacterArticleProps) => {
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
                <button className="greenbutton">
                    <CollectionIcon />
                    파견
                </button>
                <button className="greenbutton">
                    <BattleIcon />
                    전투
                </button>
            </div>
        </div>
    )
}
