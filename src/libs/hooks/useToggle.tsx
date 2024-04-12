import { useCallback, useState } from "react"

export const useToggle = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue)
    const onToggle = useCallback(() => {
        setValue(!value)
    }, [value])
    return { value, onToggle }
}
