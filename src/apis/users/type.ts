export interface IAuthParam {
    account_id: string
    password: string
}

export interface ITokenResponse {
    access_token: string
    refresh_token: string
    expired_at: string
}

export interface ISeeds {
    seeds: number
}
