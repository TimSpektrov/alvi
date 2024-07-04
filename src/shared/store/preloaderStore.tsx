import { create } from 'zustand';

interface PreloaderStoreState {
  isComplete: boolean;
  storeProgress: number;
}

interface PreloaderStoreActions {
  setIsComplete: (value: boolean) => void;
  setStoreProgress: (value: number) => void;
}

export const usePreloaderStore = create<
  PreloaderStoreState & PreloaderStoreActions
>((set) => ({
  isComplete: false,
  setIsComplete: (value) => set({ isComplete: value }),
  storeProgress: 0,
  setStoreProgress: (value) => set({ storeProgress: value }),
}));
