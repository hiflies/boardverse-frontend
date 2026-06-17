import { apiFetch } from '../lib/api'
import type {Category} from "../types/Category.ts";

export function getCategories() {
    return apiFetch<Category[]>('/categories')
}

