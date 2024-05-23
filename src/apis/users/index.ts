import { instance } from "../axios"
import { useMutation, useQuery } from "@tanstack/react-query"
import { customCookie } from "@/libs/CustomCookie"
import { IAuthParam, ISeeds, ITokenResponse } from "./type"

const ROUTER = "/users"

export const useLogin = () => {
    const response = async (params: IAuthParam) => {
        return (await instance.post<ITokenResponse>(`${ROUTER}/login`, params)).data
    }

    return useMutation({
        mutationFn: response,
        mutationKey: ["login"],
        onError: () => {
            //error 메세지
        },
        onSuccess: (res) => {
            const { access_token, refresh_token, expire_at } = res
            customCookie.set.token(access_token, refresh_token, expire_at)
            //success 메세지
        },
    })
}

export const useRegister = () => {
    const response = async (params: IAuthParam) => {
        return await instance.post(`${ROUTER}/signup`, params)
    }

    return useMutation({
        mutationFn: response,
        mutationKey: ["register"],
        onError: () => {
            //error 메세지
        },
        onSuccess: () => {
            //success 메세지
        },
    })
}

export const useReissue = () => {
    const response = async (refreshToken: string) => {
        return (
            await instance.put<ITokenResponse>("/reissue", null, {
                headers: {
                    refresh_token: refreshToken,
                },
            })
        ).data
    }

    return useMutation({
        mutationFn: response,
        mutationKey: ["reissue"],
        onSuccess: (res) => {
            const { access_token, refresh_token, expire_at } = res
            customCookie.set.token(access_token, refresh_token, expire_at)
        },
        onError: () => {
            window.location.href = "/"
            //error 메세지
        },
    })
}

export const useInquiredSeeds = () => {
    const response = async () => {
        const { data } = await instance.get<ISeeds>(`${ROUTER}/seeds`)
        return data
    }
    const { isError, data, error } = useQuery({
        queryKey: ["inquiredSeeds"],
        queryFn: response,
    })

    if (isError) {
        console.error("시드 조회 에러", error)
    }

    return { data }
}
