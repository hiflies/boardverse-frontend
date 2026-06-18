import {Link, useNavigate} from "@tanstack/react-router";
import {type SubmitEvent, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {register} from "../../api/auth.ts";
import {useAuthStore} from "../../store/auth.ts";
import type {AuthError} from "../../types/Auth.ts";
import {loginRoute, registerRoute} from "../../router.tsx";

export default function RegisterPage() {
    const navigate = useNavigate()
    const setAuth = useAuthStore((s) => s.setAuth)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMismatch, setPasswordMismatch] = useState(false)

    const mutation = useMutation({
        mutationFn: () => register(username, email, password),
        onSuccess: (data) => {
            setAuth(data)
            navigate({to: '/'})
        },
    })

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setPasswordMismatch(true)
            return
        }
        setPasswordMismatch(false)
        mutation.mutate()
    }

    const serverErrors = mutation.isError ? (mutation.error as unknown as AuthError[]) : null

    return (
        <main className="flex-1 w-full py-md md:py-lg">
            <div
                className="mb-md md:mb-lg w-full max-w-[420px] bg-surface-container border border-surface-variant/60 rounded-xl shadow-[0_24px_48px_-12px_rgba(18,5,28,0.8)] relative z-10 flex flex-col backdrop-blur-sm mx-auto">
                <header className="pt-lg pb-md px-lg text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-secondary-container text-[48px] mb-xs"
                >castle</span>
                    <h1 className="font-headline-md text-headline-md text-primary tracking-tight">BoardVerse</h1>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2 uppercase tracking-widest opacity-80">The
                        Tabletop Standard</p>
                </header>
                <div className="flex border-b border-surface-variant/50 font-label-md text-label-md">
                    <Link to={loginRoute.fullPath}
                          className="flex-1 py-md text-center text-on-surface-variant border-b-2 border-transparent hover:text-on-background hover:bg-surface-variant/5 transition-colors"
                    >
                        Log In
                    </Link>
                    <Link to={registerRoute.fullPath}
                          className="flex-1 py-md text-center text-secondary border-b-2 border-secondary bg-surface-variant/10 transition-colors"
                    >
                        Register
                    </Link>
                </div>
                <div className="p-lg">
                    <form className="space-y-md animate-fade-in block" onSubmit={handleSubmit}>
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-username">Username</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">account_circle</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    id="reg-username"
                                    placeholder="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-email">Email Address</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    id="reg-email"
                                    placeholder="player@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-password">Create Password</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">key</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    id="reg-password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-confirm-password">Re-enter Password</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">key</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    id="reg-confirm-password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {passwordMismatch && (
                            <p className="font-label-sm text-label-sm text-error pl-1">Passwords do not match.</p>
                        )}
                        {serverErrors && Array.isArray(serverErrors) && (
                            <ul className="space-y-1">
                                {serverErrors.map((err) => (
                                    <li key={err.code}
                                        className="font-label-sm text-label-sm text-error pl-1">{err.description}</li>
                                ))}
                            </ul>
                        )}
                        <button
                            className="w-full mt-lg bg-primary-container text-on-background font-label-md text-label-md py-sm rounded-DEFAULT flex items-center justify-center gap-xs hover:bg-primary-container/90 hover:ring-1 hover:ring-inset hover:ring-secondary-container transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={mutation.isPending}
                        >
                            <span>{mutation.isPending ? 'Joining...' : 'Join the Guild'}</span>
                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
