import {create} from 'zustand'
import type {AuthResponse} from '../types/Auth.ts'

type AuthStore = {
    token: string | null
    setAuth: (response: AuthResponse) => void
    clearAuth: () => void
}

function loadFromStorage(): string | null {
    return localStorage.getItem('token');
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: loadFromStorage(),
    setAuth: (response) => {
        localStorage.setItem('token', response.token)
        set({token: response.token})
    },
    clearAuth: () => {
        localStorage.removeItem('token')
        set({token: null})
    },
}))
