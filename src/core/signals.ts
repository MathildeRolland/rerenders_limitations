import { signal } from '@preact/signals';

export type SignalType<T> = {
	value: T;
};

export type ItemType = {
	fr: string;
	en: string;
	de: string;
	count: SignalType<number>;
};

export type ItemsType = SignalType<{ [key: string]: SignalType<ItemType> }>;

export const items = signal({
	child1: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: signal(1) },
	child2: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: signal(1) },
	child3: { fr: 'Bonjour', en: 'Hello', de: 'Hallo', count: signal(1) },
});

export const increment = (key: string) => {
	items.value[key as keyof typeof items.value].count.value += 1;
};
export const decrement = (key: string) => {
	items.value[key as keyof typeof items.value].count.value -= 1;
};
