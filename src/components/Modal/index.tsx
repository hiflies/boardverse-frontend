import {type ReactNode, useEffect} from 'react'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title: string
    children: ReactNode
}

export default function Modal({isOpen, onClose, title, children}: ModalProps) {
    useEffect(() => {
        if (!isOpen) return
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}>
            <div
                className="relative w-full max-w-lg bg-surface border border-outline-variant/20 rounded-xl shadow-2xl"
                onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">
                    <h2 className="text-headline-sm font-headline-sm text-on-surface">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
