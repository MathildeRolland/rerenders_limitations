import { ItemType, increment, decrement } from '../../core/signals';

type TChild = { itemKey: string; item: ItemType; title: string };

export const Child = ({ itemKey, item, title }: TChild) => {
	console.log(itemKey, ' rendered');

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
			<h1>{title}</h1>
			<p>{`Count: ${item.count.value}`}</p>
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
