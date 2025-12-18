import { create } from 'zustand'

export type IState = {
    isRTL: boolean
    isBox: boolean
    selectedLayout: 'vertical' | 'horizontal' | 'collapsible'
    theme: 'light' | 'dark' | 'system'
}

export const useStore = create<IState>((set) => ({
    isRTL: false,
    isBox: false,
    selectedLayout: 'vertical',
    theme: 'light',
}))
