export interface IAuthParam {
    account_id: string
    password: string
}

export interface ITokenResponse {
    access_token: string
    refresh_token: string
    expire_at: string
}

export interface ISeeds {
    seeds: number
}
