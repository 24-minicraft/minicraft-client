import { StartLayout } from "@/libs/layout/startLayout"
import { Login } from "./login"
import { SignUp } from "./signup"
import "./style.scss"

interface IAuthForm {
    mod: "login" | "signUp"
}

export const AuthForm = ({ mod }: IAuthForm) => {
    return (
        <StartLayout>
            <div className="authFormBlock">{mod === "login" ? <Login /> : <SignUp />}</div>
        </StartLayout>
    )
}
