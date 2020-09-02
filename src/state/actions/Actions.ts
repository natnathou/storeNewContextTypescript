import { ChangeAppStatus } from '../actions';

export enum ActionType {
	APP_STATUS
}

export enum MainActions {
	CHANGE_APP_STATUS
}

export interface Actions {
	type: ActionType;
	action: MainActions;
	payload?: any;
}

export type Action = ChangeAppStatus | Actions;
