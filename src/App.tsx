import { useState } from 'react';
import './App.css';
import { Content } from './components/content/Content';
import { StoreManagements } from './components/content/content.types';

function App() {
	const [storeManagement, setStoreManagement] = useState(
		StoreManagements.signals
	);

	return (
		<>
			<button
				onClick={() => setStoreManagement(StoreManagements.zustand)}
			>
				ZUSTAND
			</button>
			<button
				onClick={() => setStoreManagement(StoreManagements.signals)}
			>
				SIGNALS
			</button>
			<Content storeManagement={storeManagement} />
		</>
	);
}

export default App;
