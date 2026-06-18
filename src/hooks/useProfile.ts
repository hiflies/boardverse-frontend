import {useQuery} from '@tanstack/react-query'
import {getProfile} from "../api/profile.ts";
import {useAuthStore} from "../store/auth.ts";

export function useProfile(username?: string, enabled = true) {
    const authenticatedUser = useAuthStore(auth => auth.username);
    const requestedUser = username ?? authenticatedUser;
    return useQuery({
        queryKey: ['profile', requestedUser],
        queryFn: () => getProfile(requestedUser!),
        enabled: enabled && Boolean(requestedUser),
    })
}
