import "./style.scss"
import { CharacterArticle } from "../characterArticle"
import { useCharacterList } from "@/apis/characters"

export const CharacterList = () => {
    const { data, isLoading } = useCharacterList()

    if (isLoading) return <div className="characterList-loading">캐릭터 목록 로딩중...</div>

    return (
        <div className="characterList-container">
            {data && data?.character_list.map((v, idx) => <CharacterArticle data={v} idx={idx} />)}
        </div>
    )
}
