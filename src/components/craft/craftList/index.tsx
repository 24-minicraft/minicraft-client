import { useCraft, useCraftList } from "@/apis/craft"
import "./style.scss"
interface CraftRecipesType {
    result: {
        type: string
        category: string
        amount: number
    }
    requirements: {
        type: string
        amount: number
    }[]
}
export interface CraftListResponse {
    recipes: CraftRecipesType[]
}

export const CraftList = () => {
    const { data } = useCraftList()

    return (
        <div className="craftList-container">
            {data?.recipes?.map((v) => (
                <CraftArticle item={v} />
            ))}
        </div>
    )
}

const CraftArticle = ({ item }: { item: CraftRecipesType }) => {
    const { result, requirements } = item

    const { mutate } = useCraft()

    return (
        <div className="craftlist-article">
            <div className="header">
                <p>{result.type}</p>
                <p> X {result.amount}</p>
            </div>
            <div className="material">
                <p>필요 재료</p>
                <ul>
                    {requirements.map((v) => (
                        <li>
                            {v.type}
                            {"  -  "}
                            {v.amount}개
                        </li>
                    ))}
                </ul>
            </div>
            <button
                className="greenButton"
                onClick={() => {
                    mutate({ type: result.type })
                }}
            >
                조합하기
            </button>
        </div>
    )
}
