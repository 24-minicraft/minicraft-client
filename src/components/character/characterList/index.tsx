import "./style.scss"
import { CharacterArticle } from "../characterArticle"
import { useCharacterList } from "@/apis/characters"
import { ICharacterListResponse } from "@/apis/characters/type"

export const CharacterList = () => {
    const { data } = useCharacterList()
    const { character_list }: ICharacterListResponse = data

    return (
        <div className="characterList-container">
            {character_list.map((v, idx) => (
                <CharacterArticle data={v} idx={idx} />
            ))}
        </div>
    )
}
