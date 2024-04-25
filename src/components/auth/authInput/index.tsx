import { VisibleIcon } from "@/assets/icons"
import Input, { IInputProps } from "../common/input"
import "./style.scss"
import { LabelInput } from "../common/labelInput"

interface IAuthInputProps extends Omit<IInputProps, "disable"> {
    label: string
    visible?: boolean
    onToggle?: () => void
}

export const AuthInput = ({ value, onChange, name, placeholder, label, visible, onToggle, type }: IAuthInputProps) => {
    return (
        <LabelInput label={label}>
            <div className="authInputBlockOutSide">
                <div className="authInputBlockInSide">
                    <Input
                        type={type}
                        value={value}
                        onChange={onChange}
                        name={name}
                        disabled={false}
                        placeholder={placeholder}
                    />
                    {visible !== undefined && onToggle && <VisibleIcon visible={visible} onClick={onToggle} />}
                </div>
            </div>
        </LabelInput>
    )
}
