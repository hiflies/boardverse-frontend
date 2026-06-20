const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5191/api'

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await rawApiFetch(path, init);

    if (!response.ok) {
        throw new Error(`Request to ${path} failed with status ${response.status}`)
    }

    return await response.json() as T;
}

export function rawApiFetch(path: string, init?: RequestInit) {
    const token = localStorage.getItem('token')
    return fetch(`${API_BASE_URL}${path}`, {
        headers: {
            ...(!(init?.body instanceof FormData) ? {'Content-Type': 'application/json'} : {}),
            ...(token ? {Authorization: `Bearer ${token}`} : {}),
            ...init?.headers,
        },
        ...init,
    })
}
