export default function Sidebar(){
    return (
        <nav
            className="h-screen w-64 fixed left-0 top-0 flex flex-col h-full py-md px-sm z-50">
            <div className="flex items-center gap-sm mb-lg px-xs">
                <div
                    className="w-10 h-10 rounded-full overflow-hidden bg-surface-variant flex-shrink-0 border border-outline-variant/30">
                    <img alt="Collector Profile Avatar" className="w-full h-full object-cover"
                         data-alt="A portrait of a sophisticated, modern individual with a thoughtful expression. The lighting is dramatic and moody, reflecting a high-end, collector-grade aesthetic with deep ink-like purples and subtle metallic gold highlights in the background. The mood is refined and intentional, fitting for a premium tabletop gaming environment."
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf-ziIo9fn_UmeWUuSrtlu8bJeJEPPw75bHRfcySZdwe9SrjP1Fc7CqBhlgyFxur1mVJg94ux5FVTw-3jTE16Tf3keuUYvMQKAWWqP0BgV9LYvTdbpdm87ctpnuQcp0L6My3S-7R_itbo0FnFeGfqSHQ2_tv3dbSgI-ufi4t6-AFzQ_V_aS5p3eyZYGgZZicNwZOtb0ILeIKytmHHWgPbJ8fYa0gS6xvZGo7u_1TIr1NhWdLAvQ7ZU2JqHFKjtypU4EEp8CrF7yFA"/>
                </div>
                <div>
                    <h1 className="font-headline-md text-headline-md text-primary tracking-tight">BoardVerse</h1>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">The Tabletop Standard</p>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1">
                <a className="flex items-center gap-sm px-sm py-xs text-primary bg-primary-container rounded-lg font-bold scale-98 transition-transform font-label-md text-label-md"
                   href="#">
                <span className="material-symbols-outlined"
                    // style="font-variation-settings: 'FILL' 1;"
                >library_books</span>
                    Game Library
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">casino</span>
                    Active Tables
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Marketplace
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">groups</span>
                    Community
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">military_tech</span>
                    Achievements
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">settings</span>
                    Settings
                </a>
            </div>
            <div className="mt-auto mb-md">
                <button
                    className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-sm rounded hover:bg-secondary-fixed-dim transition-colors flex items-center justify-center gap-xs shadow-[0_2px_10px_rgba(18,5,28,0.4)] relative overflow-hidden group">
                <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="material-symbols-outlined">videogame_asset</span>
                    Join Game
                </button>
            </div>
            <div className="pt-sm border-t border-outline-variant/30 space-y-1">
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </a>
                <a className="flex items-center gap-sm px-sm py-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 scale-98 transition-transform font-label-md text-label-md rounded-lg"
                   href="#">
                    <span className="material-symbols-outlined">help</span>
                    Help
                </a>
            </div>
        </nav>

    );
}