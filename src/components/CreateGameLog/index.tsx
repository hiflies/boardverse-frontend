import {type SubmitEvent, type KeyboardEvent, useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import {createGameLog} from '../../api/gamelogs'
import {getProfile} from "../../api/profile.ts";
import type {User} from "../../types/User.ts";

type CreateGameLogProps = {
    gameId: number
    onClose: () => void
}

export default function CreateGameLog({gameId, onClose}: CreateGameLogProps) {
    const [startedAt, setStartedAt] = useState('')
    const [finishedAt, setFinishedAt] = useState('')
    const [playerInput, setPlayerInput] = useState('')
    const [players, setPlayers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const mutation = useMutation({
        mutationFn: () => createGameLog({
            gameId,
            playerIds: players.map(u => u.id),
            startedAt: new Date(startedAt).toISOString(),
            finishedAt: new Date(finishedAt).toISOString(),
        }),
        onSuccess: () => onClose(),
    })

    async function addPlayer() {
        const username = playerInput.trim().replace(/^@/, '')
        if (!username || players.some(u => u.username.toLowerCase() === username.toLowerCase())) {
            setPlayerInput('')
            setError(null)
            return
        }

        setLoading(true);
        setError(null)
        try {
            const user = await getProfile(username)
            setPlayers(prev => [...prev, user])
        } catch (e) {
            setError(e as Error)
        }
        setPlayerInput('')
        setLoading(false);
    }

    function removePlayer(user: User) {
        setPlayers(prev => prev.filter(p => p !== user))
    }

    function handlePlayerKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            e.preventDefault()
            addPlayer()
        }
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        mutation.mutate()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                        Start Time
                    </label>
                    <input
                        type="datetime-local"
                        value={startedAt}
                        onChange={e => setStartedAt(e.target.value)}
                        required
                        className="bg-surface-container-lowest text-on-surface border border-outline-variant/30 rounded-lg px-3 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                        End Time
                    </label>
                    <input
                        type="datetime-local"
                        value={finishedAt}
                        onChange={e => setFinishedAt(e.target.value)}
                        required
                        className="bg-surface-container-lowest text-on-surface border border-outline-variant/30 rounded-lg px-3 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                    Players
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={playerInput}
                        onChange={e => setPlayerInput(e.target.value)}
                        onKeyDown={handlePlayerKeyDown}
                        placeholder="@username"
                        className="flex-1 bg-surface-container-lowest text-on-surface border border-outline-variant/30 rounded-lg px-3 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/40"
                    />
                    <button
                        type="button"
                        disabled={loading}
                        onClick={addPlayer}
                        className="px-4 py-2 bg-surface-variant text-on-surface-variant hover:text-on-surface rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">person_add</span>
                        Add
                    </button>
                </div>
                {Boolean(error) && (
                    <p className="text-error font-body-md text-body-md">User couldn't found!</p>
                )}
                {players.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {players.map(user => (
                            <span
                                key={user.username}
                                className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md">
                                @{user.username}
                                <button
                                    type="button"
                                    onClick={() => removePlayer(user)}
                                    className="cursor-pointer hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {mutation.isError && (
                <p className="text-error text-body-sm font-body-sm">
                    Something went wrong. Please try again.
                </p>
            )}

            <div className="flex justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors">
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="px-6 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:brightness-110 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                    {mutation.isPending ? 'Saving...' : 'Log Play'}
                    <span className="material-symbols-outlined text-[16px]">edit_square</span>
                </button>
            </div>
        </form>
    )
}
