import type {Category} from "./Category.ts";

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
};

export type GameDetails = Game & {
    averageRating: number
    gameRulesUrl: string
    releaseYear: number
    minAge: number
    description: string
};
