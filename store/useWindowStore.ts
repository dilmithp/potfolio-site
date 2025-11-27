import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { apps } from '@/constants/config';

export interface WindowState {
  id: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
}

interface WindowStore {
  windows: Record<string, WindowState>;
  focusedWindowId: string | null;
  maxZIndex: number;

  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  toggleWindow: (id: string) => void;
}

export const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: {},
    focusedWindowId: null,
    maxZIndex: 100,

    openWindow: (id) =>
      set((state) => {
        if (!state.windows[id]) {
          state.windows[id] = {
            id,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            zIndex: state.maxZIndex + 1,
          };
        } else {
          state.windows[id].isOpen = true;
          state.windows[id].isMinimized = false;
          state.windows[id].zIndex = state.maxZIndex + 1;
        }
        state.focusedWindowId = id;
        state.maxZIndex += 1;
      }),

    closeWindow: (id) =>
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].isOpen = false;
          state.focusedWindowId = null; // Ideally find the next top window
        }
      }),

    minimizeWindow: (id) =>
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].isMinimized = true;
          state.focusedWindowId = null;
        }
      }),

    maximizeWindow: (id) =>
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].isMaximized = !state.windows[id].isMaximized;
          state.windows[id].zIndex = state.maxZIndex + 1;
          state.focusedWindowId = id;
          state.maxZIndex += 1;
        }
      }),

    focusWindow: (id) =>
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].zIndex = state.maxZIndex + 1;
          state.focusedWindowId = id;
          state.maxZIndex += 1;
          state.windows[id].isMinimized = false;
        }
      }),

    toggleWindow: (id) =>
      set((state) => {
        const window = state.windows[id];
        if (window && window.isOpen && !window.isMinimized) {
          if (state.focusedWindowId === id) {
            // If it's focused, minimize it
            window.isMinimized = true;
            state.focusedWindowId = null;
          } else {
            // If open but not focused, focus it
            window.zIndex = state.maxZIndex + 1;
            state.focusedWindowId = id;
            state.maxZIndex += 1;
          }
        } else {
          // If closed or minimized, open/restore and focus
          if (!window) {
            state.windows[id] = {
              id,
              isOpen: true,
              isMinimized: false,
              isMaximized: false,
              zIndex: state.maxZIndex + 1,
            };
          } else {
            window.isOpen = true;
            window.isMinimized = false;
            window.zIndex = state.maxZIndex + 1;
          }
          state.focusedWindowId = id;
          state.maxZIndex += 1;
        }
      }),
  }))
);
