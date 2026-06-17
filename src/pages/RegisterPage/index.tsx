import {Link} from "@tanstack/react-router";

export default function RegisterPage() {
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
                    <Link
                        to="/login"
                        className="flex-1 py-md text-center text-on-surface-variant border-b-2 border-transparent hover:text-on-background hover:bg-surface-variant/5 transition-colors"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className="flex-1 py-md text-center text-secondary border-b-2 border-secondary bg-surface-variant/10 transition-colors"
                    >
                        Register
                    </Link>
                </div>
                <div className="p-lg">
                    <form className="space-y-md animate-fade-in block"
                    >
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-email">Username</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">account_circle</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    placeholder="Username"
                                    type="input"/>
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
                                    placeholder="player@example.com"
                                    type="email"/>
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
                                    placeholder="••••••••"
                                    type="password"/>
                            </div>
                        </div>
                        <div className="space-y-xs">
                            <label className="font-label-sm text-label-sm text-on-surface-variant block pl-1"
                                   htmlFor="reg-password">Re-enter Password</label>
                            <div className="relative">
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">key</span>
                                <input
                                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant/50 py-sm pl-10 pr-sm text-on-background font-body-md text-body-md placeholder:text-outline/50 focus:ring-0 focus:border-secondary-container transition-colors input-well"
                                    placeholder="••••••••"
                                    type="password"/>
                            </div>
                        </div>
                        <button
                            className="w-full mt-lg bg-primary-container text-on-background font-label-md text-label-md py-sm rounded-DEFAULT flex items-center justify-center gap-xs hover:bg-primary-container/90 hover:ring-1 hover:ring-inset hover:ring-secondary-container transition-all"
                            type="submit">
                            <span>Join the Guild</span>
                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}