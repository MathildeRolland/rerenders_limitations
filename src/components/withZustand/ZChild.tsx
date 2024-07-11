import { memo } from 'react';
import { ZItemType, useStore } from '../../core/zStore';

type ZChildType = { itemKey: string; item: ZItemType };

export const ZChild = memo(({ itemKey, item }: ZChildType) => {
	console.log(itemKey, 'zustand rendered');

	const increment = useStore((state) => state.increment);
	const decrement = useStore((state) => state.decrement);

	const handleIncrement = () => {
		increment(itemKey);
	};

	const handleDecrement = () => {
		decrement(itemKey);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '1rem 2rem',
			}}
		>
			<h1>{itemKey}</h1>
			<p>{`Count: ${item.count}`}</p>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<button onClick={handleDecrement}>-</button>
				<button onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
});
