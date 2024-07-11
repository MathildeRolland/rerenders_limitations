import { create } from 'zustand';

export type ZItemType = {
	fr: string;
	en: string;
	de: string;
	count: number;
};

export type ZStoreType = {
	items: { [key: string]: ZItemType };
	increment: (key: string) => void;
	decrement: (key: string) => void;
};

export const useStore = create<ZStoreType>((set) => ({
	items: {
		child1: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: 1 },
		child2: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: 1 },
		child3: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: 1 },
	},
	increment: (key: string) =>
		set((state) => ({
			items: {
				...state.items,
				[key]: {
					...state.items[key],
					count: state.items.child1.count + 1,
				},
			},
		})),
	decrement: (key: string) =>
		set((state) => ({
			items: {
				...state.items,
				[key]: {
					...state.items[key],
					count: state.items.child1.count - 1,
				},
			},
		})),
}));
