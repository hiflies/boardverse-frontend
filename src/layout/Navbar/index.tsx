import {Link} from "@tanstack/react-router";
import {loginRoute, profileRoute} from "../../router.tsx";
import {useAuthStore, useIsAuthenticated} from "../../store/auth.ts";
import {useProfile} from "../../hooks/useProfile.ts";
import ProfilePhoto from "../../components/ProfilePhoto";

export default function Navbar() {
    const authStore = useAuthStore();

    const isAuthenticated = useIsAuthenticated();
    const logout = authStore.clearAuth;
    const {data: user} = useProfile('me')

    return (
        <header
            className="w-full flex justify-between items-center px-md py-xs mx-auto shadow-sm docked full-width top-0">
            <div className="flex-1 items-center gap-sm">
            </div>
            <div className="hidden w-full max-w-sm md:flex mx-md">
                <div className="relative w-full group">
              <span
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors"
                  data-icon="search">search</span>
                    <input
                        className="w-full bg-surface-container-low text-on-surface border-b border-surface-variant focus:border-secondary pl-10 pr-4 py-2 rounded-t-DEFAULT focus:outline-none focus:ring-0 transition-colors font-body-md text-body-md placeholder:text-on-surface-variant/50"
                        placeholder="Search games, players, groups..." type="text"/>
                </div>
            </div>
            <div className="flex flex-1 flex-row-reverse items-center gap-sm md:gap-md">

                {isAuthenticated ? (
                    <>
                        <button
                            onClick={logout}
                            className="hidden md:flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95">
                            <span className="material-symbols-outlined text-[18px]" data-icon="logout">logout</span>
                            Logout
                        </button>
                        <Link
                            to={profileRoute.fullPath}
                            className="active:scale-95 transition-transform shrink-0 rounded-full overflow-hidden border-2 border-transparent hover:border-secondary transition-colors">
                            <ProfilePhoto
                                className="w-8 h-8 md:w-10 md:h-10 object-cover"
                                src={user?.avatarUrl}/>
                        </Link>
                        <button
                            className="relative p-2 text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 active:scale-95 rounded-full hover:bg-surface-variant">
                            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
                        </button>
                    </>
                ) : (
                    <Link
                        to={loginRoute.fullPath}
                        className="hidden md:flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-on-primary-fixed hover:text-primary-fixed transition-all border border-transparent hover:border-primary-fixed/20 shadow-sm active:scale-95">
                        <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
}