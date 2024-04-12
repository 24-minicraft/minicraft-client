import { Fragment } from "react"
import { useInput, useToggle } from "@/libs/hooks"
import { DefaultInput } from "../../defaultInput"
import { LabelInput } from "../../common/labelInput"
import { PasswordInput } from "../../passwordInput"

export const Login = () => {
    const { value: pw, onToggle } = useToggle(false)
    const {
        form: value,
        setForm: setValue,
        onChange,
    } = useInput({
        id: "",
        password: "",
    })

    return (
        <Fragment>
            <LabelInput label="아이디">
                <DefaultInput
                    name="id"
                    disabled={false}
                    value={value.id}
                    onChange={onChange}
                    placeholder="아이디를 입력해주세요"
                />
            </LabelInput>
            <PasswordInput
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요"
                visible={pw}
                value={value.password}
                onChange={onChange}
                onToggle={onToggle}
            />
            <button className="grayButton" style={{ height: 50 }}>
                로그인
            </button>
        </Fragment>
    )
}
