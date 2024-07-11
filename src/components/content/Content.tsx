import { Parent } from '../withSignals/Parent';
import { ZParent } from '../withZustand/ZParent';
import { StoreManagements } from './content.types';

type TContent = {
	storeManagement: StoreManagements;
};

export const Content = ({ storeManagement }: TContent) => {
	if (storeManagement === StoreManagements.zustand) return <ZParent />;

	if (storeManagement === StoreManagements.signals) return <Parent />;

	return null;
};
