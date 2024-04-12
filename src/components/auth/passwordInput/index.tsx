import { VisibleIcon } from "@/assets/icons"
import Input, { IInputProps } from "../common/input"
import "./style.scss"
import { LabelInput } from "../common/labelInput"

interface IPasswordInput extends Pick<IInputProps, "value" | "onChange" | "name" | "placeholder"> {
    label: string
    visible: boolean
    onToggle: () => void
}

export const PasswordInput = ({
    label,
    value,
    onChange,
    visible,
    onToggle,
    name = "password",
    placeholder,
}: IPasswordInput) => {
    return (
        <LabelInput label={label}>
            <div className="passwordInputBlockOutSide">
                <div className="passwordInputBlockInSide">
                    <Input
                        type={visible ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        name={name}
                        placeholder={placeholder}
                        disabled={false}
                    />
                    <VisibleIcon visible={visible} onClick={onToggle} />
                </div>
            </div>
        </LabelInput>
    )
}
