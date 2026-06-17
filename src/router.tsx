import {createRootRoute, createRoute, createRouter} from '@tanstack/react-router'
import HomePage from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import MainLayout from "./layout/MainLayout";
import GameList from "./pages/GameList";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layout/AuthLayout";

const rootRoute = createRootRoute()

const mainLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'main-layout',
    component: MainLayout,
})

const authLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'auth-layout',
    component: AuthLayout,
})

const indexRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/',
    component: HomePage,
})

const gameListRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/games',
    component: GameList,
})

const gameDetailRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/games/$gameId',
    component: GameDetail,
})

const profileRoute = createRoute({
    getParentRoute: () => mainLayoutRoute,
    path: '/profile',
    component: Profile,
})

const loginRoute = createRoute({
    getParentRoute: () => authLayoutRoute,
    path: '/login',
    component: LoginPage,
})

const registerRoute = createRoute({
    getParentRoute: () => authLayoutRoute,
    path: '/register',
    component: RegisterPage,
})

const routeTree = rootRoute.addChildren([
    mainLayoutRoute.addChildren([
        indexRoute,
        gameListRoute,
        gameDetailRoute,
        profileRoute,
    ]),
    authLayoutRoute.addChildren([
        loginRoute,
        registerRoute,
    ]),
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
