import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { customCookie } from "@/libs/CustomCookie"
import { useReissue } from "./users"

export let serverState = "live"

export const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 10000,
})

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        const accessToken = customCookie.get.accessToken()
        const returnConfig = {
            ...config,
        }
        if (accessToken) {
            returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`
        }
        return returnConfig
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    async (response: AxiosResponse) => response,
    async (error: AxiosError<AxiosError>) => {
        const { mutate: reissueMutation } = useReissue()
        if (axios.isAxiosError(error) && error.response) {
            const refreshToken = customCookie.get.refreshToken()
            if (error.response.status === 403 || error.response.status === 401) {
                if (refreshToken) {
                    reissueMutation(refreshToken)
                } else {
                    customCookie.remove.accessToken()
                    customCookie.remove.refreshToken()
                    window.location.href = "/"
                }
            } else return Promise.reject(error)
        }
    },
)
