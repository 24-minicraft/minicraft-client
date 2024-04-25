import { Fragment } from "react"
import { useInput, useToggle } from "@/libs/hooks"
import { AuthInput } from "../../authInput"
import { useLogin } from "@/apis/users"

export const Login = () => {
    const { mutate: loginMutation } = useLogin()
    const { value: pw, onToggle: onTogglePw } = useToggle(false)
    const {
        form: value,
        setForm: setValue,
        onChange,
    } = useInput({
        account_id: "",
        password: "",
    })

    const onLogin = () => {
        if (value.account_id && value.password) loginMutation(value)
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
                name="password"
                label="비밀번호"
                visible={pw}
                value={value.password}
                onChange={onChange}
                onToggle={onTogglePw}
                placeholder="설정할 비밀번호를 입력해주세요"
                disabled={false}
                type={pw ? "text" : "password"}
            />
            <button className="grayButton" style={{ height: 50 }} onClick={onLogin}>
                로그인
            </button>
        </Fragment>
    )
}
