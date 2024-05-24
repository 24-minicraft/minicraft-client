import "./style.scss"

const Resource = ({ item, onclick, loading }: { item?: React.ReactNode; onclick: () => void; loading: boolean }) => {
    return (
        <div className="resourceBlock">
            {item}
            <button className="collectionButton" onClick={loading ? onclick : undefined}>
                {loading ? "수집" : "채집 중"}
            </button>
        </div>
    )
}

export default Resource
