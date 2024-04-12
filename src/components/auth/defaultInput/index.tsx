import Input, { IInputProps } from "../common/input"
import "./style.scss"

export const DefaultInput = ({ value, onChange, name, placeholder }: Omit<IInputProps, "disable" | "type">) => {
    return (
        <div className="DefaultInputBlockOutSide">
            <div className="DefaultInputBlockInSide">
                <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    name={name}
                    disabled={false}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}
