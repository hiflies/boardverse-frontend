export type AuthResponse = {
    token: string
    userId: number
    username: string
    email: string
}

export type AuthError = {
    code: string
    description: string
}
