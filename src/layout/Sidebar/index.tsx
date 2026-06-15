import {useUIStore} from "../../store/ui.tsx";
import Link from "./Link.tsx";

export default function Sidebar() {
    const {sidebarSlot} = useUIStore();
    return (
        <nav
            className="h-screen w-64 fixed left-0 top-0 flex flex-col h-full py-md z-50">
            <Link to="/" className="flex items-center gap-sm mb-lg px-xs" activeProps={{}} inactiveProps={{}}>
                <div>
                    <h1 className="font-headline-md text-headline-md text-primary tracking-tight">BoardVerse</h1>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">The Tabletop Standard</p>
                </div>
            </Link>
            <div className="flex-1 overflow-y-auto">
                <Link to="/">
                    <span className="material-symbols-outlined">home</span>
                    Feed
                </Link>
                <Link to="/games">
                    <span className="material-symbols-outlined">library_books</span>
                    Game Library
                </Link>
                {sidebarSlot}
            </div>
        </nav>
    );
}
