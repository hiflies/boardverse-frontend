import type {Category} from "./Category.ts";

export type Game = {
    id: number
    name: string
    tagline : string
    description: string
    categories: Category[]
    minPlayers : number
    maxPlayers : number
    minAge : number
    releaseYear: number
    imageUrl : string
    gameRulesUrl :string
    averageRating : number
    votesCount : number
    duration : string
    complexity: number
    createdAt : string
    updatedAt: string
}
