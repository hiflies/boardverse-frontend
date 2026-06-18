import {apiFetch} from "../lib/api.ts";
import type {User} from "../types/User.ts";

export function getProfile(username:string) {
   return apiFetch<User>(`/profile/${username}`);
}
