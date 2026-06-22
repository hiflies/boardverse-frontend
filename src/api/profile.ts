import {apiFetch} from "../lib/api.ts";
import type {User} from "../types/User.ts";

export function getProfile(username:string, details: boolean) {
   let path = `/profile/${username}`;
   if (details) {
      path += `/details`;
   }
   return apiFetch<User>(path);
}
