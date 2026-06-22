import type {Category} from "./Category.ts";

export type PagedResult<T> = {
    items: T[]
    totalCount: number
    page: number
    pageSize: number
    totalPages: number
}

export type Game = {
    id: number
    name: string
    tagline: string
    categories: Category[];
    minPlayers: number
    maxPlayers: number
    imageUrl: string
    duration: string
    complexity: number
    averageRating: number
};

export type GameDetails = Game & {
    gameRulesUrl: string
    releaseYear: number
    minAge: number
    description: string
};
