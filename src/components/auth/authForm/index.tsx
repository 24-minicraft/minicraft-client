import { StartLayout } from "@/libs/layout/startLayout"
import { Login } from "./login"
import { SignUp } from "./signup"
import { basicLogo } from "@/assets/logo"
import "./style.scss"

interface IAuthForm {
    mod: "login" | "signUp"
}

export const AuthForm = ({ mod }: IAuthForm) => {
    return (
        <StartLayout>
            <img className="logo" src={basicLogo} />
            <div className="authFormBlock">{mod === "login" ? <Login /> : <SignUp />}</div>
        </StartLayout>
    )
}
