import type {AuthError, AuthResponse} from '../types/Auth.ts'
import {rawApiFetch} from "../lib/api.ts";

export async function login(email: string, password: string): Promise<AuthResponse> {
    const response = await rawApiFetch(`/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
    })

    if (!response.ok) {
        throw await response.json()
    }

    return response.json()
}

export async function register(username: string, email: string, password: string): Promise<AuthResponse> {
    const response = await rawApiFetch(`/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, email, password}),
    })

    if (!response.ok) {
        throw await response.json() as AuthError[]
    }

    return response.json()
}
