import { Fragment } from "react"
import { useInput, useToggle } from "@/libs/hooks"
import "../../../../libs/styles/components.scss"
import { AuthInput } from "../../authInput"

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
            <AuthInput
                label="아이디"
                name="id"
                disabled={false}
                value={value.id}
                onChange={onChange}
                placeholder="아이디를 입력해주세요"
                type="text"
            />
            <AuthInput
                label="비밀번호"
                name="password"
                visible={pw1}
                value={value.password}
                onChange={onChange}
                onToggle={onTogglePw1}
                placeholder="설정할 비밀번호를 입력해주세요"
                disabled={false}
                type={pw1 ? "text" : "password"}
            />
            <AuthInput
                label="비밀번호"
                name="rePassword"
                visible={pw2}
                value={value.rePassword}
                onChange={onChange}
                onToggle={onTogglePw2}
                placeholder="설정한 비밀번호를 재입력해주세요"
                disabled={false}
                type={pw2 ? "text" : "password"}
            />
            <button className="grayButton" style={{ height: 50 }}>
                로그인
            </button>
        </Fragment>
    )
}
