import React from "react"
import "../../../../libs/styles/components.scss"

export interface IInputProps {
    name?: string
    disabled: boolean
    type: "submit" | "text" | "password"
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(function (props, ref) {
    const { value, onChange, name, type, disabled } = props

    return (
        <input
            name={name}
            className={`inputBlock ${disabled ? "disabled" : ""}`}
            type={type}
            value={value}
            onChange={onChange}
            ref={ref}
            disabled={disabled}
            autoComplete="off"
        />
    )
})

export default Input
