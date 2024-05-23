import { Fragment } from "react"
import { useInput, useToggle } from "@/libs/hooks"
import "../../../../libs/styles/components.scss"
import { AuthInput } from "../../authInput"
import { useRegister } from "@/apis/users"

export const SignUp = () => {
    const { mutate: registerMutation } = useRegister()
    const { value: pw1, onToggle: onTogglePw1 } = useToggle(false)
    const { value: pw2, onToggle: onTogglePw2 } = useToggle(false)
    const {
        form: value,
        setForm: setValue,
        onChange,
    } = useInput({
        account_id: "",
        password: "",
        rePassword: "",
    })

    const onSignup = () => {
        const { account_id, password, rePassword } = value
        if (password === rePassword && account_id && password) registerMutation({ account_id, password })
    }

    return (
        <Fragment>
            <AuthInput
                label="아이디"
                name="account_id"
                disabled={false}
                value={value.account_id}
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
            <button className="grayButton" style={{ height: 50 }} onClick={onSignup}>
                회원가입
            </button>
        </Fragment>
    )
}
