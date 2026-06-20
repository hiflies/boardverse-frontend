import {create} from 'zustand'
import type {AuthResponse} from '../types/Auth.ts'

type AuthStore = {
    token: string | null
    username: string | null
    setAuth: (response: AuthResponse) => void
    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => {
    const {token, username} = loadFromLocalStorage();
    return {
        token,
        username,
        setAuth: (response) => {
            localStorage.setItem('token', response.token)
            set({token: response.token, username: response.username})
        },
        logout: () => {
            localStorage.removeItem('token')
            set({token: null, username: null})
        },
    };
})

export const useIsAuthenticated = () => {
    return Boolean(useAuthStore(a => a.token));
}

function loadFromLocalStorage() {
    const token = localStorage.getItem('token');
    if (!token) {
        return {token: null, username: null};
    }

    const rawUserData = token.split('.')[1];
    if (!rawUserData) {
        return {token: null, username: null};
    }

    const userData = atob(rawUserData);
    if (!userData) {
        return {token: null, username: null};
    }

    const user = JSON.parse(userData);
    if (!user) {
        return {token: null, username: null};
    }

    if (new Date(user.exp * 1000).getTime() < new Date().getTime()) {
        return {token: null, username: null};
    }

    return {
        token,
        username: user.unique_name,
    }
}