import "./style.scss"
import { CharacterArticle } from "../characterArticle"
import { useCharacterList } from "@/apis/characters"

export const CharacterList = () => {
    const { character_list: data } = useCharacterList()

    return (
        <div className="characterList-container">
            {data.map((v, idx) => (
                <CharacterArticle data={v} idx={idx} />
            ))}
        </div>
    )
}
