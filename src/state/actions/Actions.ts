import { AppStatusActions } from './AppStatus';

export enum ActionType {
	APP_STATUS
}

export interface Action {
	type: ActionType;
	action: AppStatusActions;
	payload?: any;
}
