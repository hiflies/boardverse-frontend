import {create} from 'zustand'
import type {ReactNode} from 'react'

type UIStore = {
    sidebarSlot: ReactNode
    setSidebarSlot: (node: ReactNode) => void
}

export const useUIStore = create<UIStore>((set) => ({
    sidebarSlot: null,
    setSidebarSlot: (node) => set({sidebarSlot: node}),
}));
