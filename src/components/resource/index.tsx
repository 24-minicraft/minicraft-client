import "./style.scss"

const Resource = ({ item }: { item?: React.ReactNode }) => {
    return (
        <div className="resourceBlock">
            {item}
            <button className="collectionButton">수집</button>
        </div>
    )
}

export default Resource
