import { create } from 'zustand';

export interface LoaderStore {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

export const useLoaderStore = create<LoaderStore>(set => ({
	isLoading: true,
	setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
