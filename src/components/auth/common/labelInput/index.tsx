import "../../../../libs/styles/components.scss"

interface ILabelInputProps {
    children: React.ReactNode
    label: string
}

export const LabelInput = ({ children, label }: ILabelInputProps) => {
    return (
        <label className="labelInputBlock">
            {label}
            {children}
        </label>
    )
}
