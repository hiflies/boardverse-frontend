import {useQuery} from '@tanstack/react-query'
import {getProfile} from "../api/profile.ts";
import {useAuthStore} from "../store/auth.ts";

export function useProfile(username?: string, enabled = true, details = false) {
    const authenticatedUser = useAuthStore(auth => auth.username);
    const requestedUser = username ?? authenticatedUser;
    return useQuery({
        queryKey: ['profile', requestedUser, details],
        queryFn: () => getProfile(requestedUser!, details),
        enabled: enabled && Boolean(requestedUser),
    })
}
