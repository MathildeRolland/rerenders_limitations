// import { useStore } from '../../core/zStore';
// import { ZChild } from './ZChild';
import { ZChild2 } from './ZChild2';

export const ZParent = () => {
	console.log('Zustand parent');
	// const items = useStore((state) => state.items);

	return (
		<>
			<h1>With Zustand</h1>
			<div style={{ display: 'flex' }}>
				{/* {Object.entries(items).map(([key, value]) => (
					<ZChild key={key} itemKey={key} item={value} />
				))} */}
				<ZChild2 itemKey='child1' />
				<ZChild2 itemKey='child2' />
				<ZChild2 itemKey='child3' />
			</div>
		</>
	);
};
