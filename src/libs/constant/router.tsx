import { customCookie } from "../CustomCookie"

export const router = {
    login: [
        {
            url: "/game?area=forest",
            tab: "플레이",
        },
        {
            url: "/",
            tab: "로그아웃",
            event: () => {
                customCookie.remove.accessToken()
                customCookie.remove.refreshToken()
                window.location.href = "/"
            },
        },
    ],
    noLogin: [
        {
            url: "/login",
            tab: "로그인",
        },
        {
            url: "/signup",
            tab: "회원가입",
        },
    ],
}
