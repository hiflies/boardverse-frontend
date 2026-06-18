import {create} from 'zustand'
import type {AuthResponse} from '../types/Auth.ts'

type AuthStore = {
    token: string | null
    username: string | null
    setAuth: (response: AuthResponse) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    setAuth: (response) => {
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', response.username)
        set({token: response.token, username: response.username})
    },
    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        set({token: null, username: null})
    },
}))

export const useIsAuthenticated = () => {
    return Boolean(useAuthStore(a => a.token));
}