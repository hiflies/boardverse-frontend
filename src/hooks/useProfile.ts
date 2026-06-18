import {useQuery} from '@tanstack/react-query'
import {getProfile} from "../api/profile.ts";

export function useProfile(username: string, enabled: boolean) {
    return useQuery({
        queryKey: ['profile', username],
        queryFn: () => getProfile(username),
        enabled,
    })
}
