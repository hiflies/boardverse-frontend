import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import Library from "./pages/Library";
import GameDetail from "./pages/GameDetail";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";

const rootRoute = createRootRoute({
    component: () => (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <Sidebar/>
            <div className="bg-background border-l border-t rounded-tl-[10px] border-outline-variant ml-64 flex-1 flex overflow-y-scroll">
                <Outlet/>
            </div>
        </div>
    ),
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
})

const libraryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/library',
    component: Library,
})

const gameDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/games/$gameId',
    component: GameDetail,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
})

const profileRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/profile',
    component: Profile,
})

const routeTree = rootRoute.addChildren([
    indexRoute,
    libraryRoute,
    gameDetailRoute,
    loginRoute,
    profileRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
