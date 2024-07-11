import { items } from '../../core/signals';
import { Child } from './Child';

export const Parent = () => {
	console.log('parent ==>', items);
	return (
		<>
			<h1>With Signals</h1>
			<div style={{ display: 'flex' }}>
				{Object.entries(items.value).map(([key, value]) => (
					<Child key={key} itemKey={key} item={value} title={key} />
				))}
			</div>
		</>
	);
};
