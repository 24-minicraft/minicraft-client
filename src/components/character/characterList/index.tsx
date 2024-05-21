import "./style.scss"
import { CharacterArticle } from "../characterArticle"
import { useCharacterList } from "@/apis/characters"
import { ICharacteListResponse } from "@/apis/characters/type"

export const CharacterList = () => {
    const { data } = useCharacterList()
    const { character_list }: ICharacteListResponse = data

    return (
        <div className="characterList-container">
            {character_list.map((v, idx) => (
                <CharacterArticle data={v} idx={idx} />
            ))}
        </div>
    )
}
