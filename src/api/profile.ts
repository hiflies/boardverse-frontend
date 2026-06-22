import {apiFetch} from "../lib/api.ts";
import type {User} from "../types/User.ts";
import type {Post} from "../types/Post.ts";

export function getProfile(username:string, details: boolean) {
   let path = `/profile/${username}`;
   if (details) {
      path += `/details`;
   }
   return apiFetch<User>(path);
}

type UpdateProfilePayload = {
  text?:string;
  image?:File;
};

export function updateProfile(payload: UpdateProfilePayload) {
   const form = new FormData()
   if (payload.image) form.append('image', payload.image)
   if (payload.text) form.append('text', payload.text);

   return apiFetch<Post>('/profile/me', {method: 'PUT', body: form})
}
