import Seeds from "@/components/seeds"
import { useInquiredSeeds } from "@/apis/users"

const SeedsContainer = () => {
    const { data } = useInquiredSeeds()
    return <Seeds seeds={data ? data?.seeds : 0} />
}

export default SeedsContainer
