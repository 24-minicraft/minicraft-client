import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "@/pages/MainPage"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import GamePage from "./pages/GamePage"
import NotFoundPage from "./pages/NotFoundPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
