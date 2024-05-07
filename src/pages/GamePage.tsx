import { CharacterArticle } from "@/components/character/characterArticle"
import { ICharacterArticle } from "@/types/character.type"

const GamePage = () => {
    const a: ICharacterArticle[] = [
        {
            id: 1,
            name: "테스트",
            health: 100,
            defense: 0,
            lucky: 0,
            work: {
                type: "COLLECTION",
                start_time: "yyyy-MM-dd HH:mm:ss",
                duration: 180,
                region: "sdf",
            },
            equipment_list: [{ category: "ARMOR", type: "asd" }],
            lastDamageTime: "yyyy-MM-dd HH:mm:ss",
        },
        {
            id: 1,
            name: "테스트",
            health: 100,
            defense: 0,
            lucky: 0,
            work: {
                type: "COLLECTION",
                start_time: "yyyy-MM-dd HH:mm:ss",
                duration: 180,
                region: "sdf",
            },
            equipment_list: [{ category: "ARMOR", type: "asd" }],
            lastDamageTime: "yyyy-MM-dd HH:mm:ss",
        },
        {
            id: 1,
            name: "테스트",
            health: 100,
            defense: 0,
            lucky: 0,
            work: {
                type: "COLLECTION",
                start_time: "yyyy-MM-dd HH:mm:ss",
                duration: 180,
                region: "sdf",
            },
            equipment_list: [{ category: "ARMOR", type: "asd" }],
            lastDamageTime: "yyyy-MM-dd HH:mm:ss",
        },
    ]

    return (
        <>
            {a.map((data, idx) => (
                <CharacterArticle data={data} idx={idx} />
            ))}
        </>
    )
}

export default GamePage
