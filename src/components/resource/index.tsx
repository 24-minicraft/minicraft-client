import "./style.scss"

const Resource = ({
    item,
    onclick,
    loading,
    title,
}: {
    item?: React.ReactNode
    onclick: () => void
    loading: boolean
    title?: string
}) => {
    return (
        <div className="resourceBlock">
            {item}
            <button className="collectionButton" onClick={loading ? onclick : undefined}>
                {title ? title : loading ? "수집" : "채집 중"}
            </button>
        </div>
    )
}

export default Resource
