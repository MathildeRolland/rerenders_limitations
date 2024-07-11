import { useStore } from '../../core/zStore';

type TZChild2Type = { itemKey: string };

export const ZChild2 = ({ itemKey }: TZChild2Type) => {
	console.log(itemKey, 'zustand rendered');
	const count = useStore((state) => state.items[itemKey].count);
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
			<p>{`Count: ${count}`}</p>
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
};
