import { Fragment } from "react"
import { LabelInput } from "../../common/labelInput"
import { DefaultInput } from "../../defaultInput"
import { PasswordInput } from "../../passwordInput"
import { useInput, useToggle } from "@/libs/hooks"
import "../../../../libs/styles/components.scss"

export const SignUp = () => {
    const { value: pw1, onToggle: onTogglePw1 } = useToggle(false)
    const { value: pw2, onToggle: onTogglePw2 } = useToggle(false)
    const {
        form: value,
        setForm: setValue,
        onChange,
    } = useInput({
        id: "",
        password: "",
        rePassword: "",
    })

    return (
        <Fragment>
            <LabelInput label="아이디">
                <DefaultInput name="id" disabled={false} value={value.id} onChange={onChange} />
            </LabelInput>
            <PasswordInput
                label="비밀번호"
                visible={pw1}
                value={value.password}
                onChange={onChange}
                onToggle={onTogglePw1}
            />
            <PasswordInput
                label="비밀번호"
                name="rePassword"
                visible={pw2}
                value={value.rePassword}
                onChange={onChange}
                onToggle={onTogglePw2}
            />
            <button className="grayButton" style={{ height: 50 }}>
                로그인
            </button>
        </Fragment>
    )
}
