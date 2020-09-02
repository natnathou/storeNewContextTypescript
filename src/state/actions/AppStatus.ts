import { ActionType } from './index';

export enum AppStatusActions {
	CHANGE_APP_STATUS
}

export interface ChangeAppStatus {
	type: ActionType.APP_STATUS;
	action: AppStatusActions.CHANGE_APP_STATUS;
	payload: boolean;
}

export const changeAppStatus = (status: boolean): ChangeAppStatus => {
	return {
		type: ActionType.APP_STATUS,
		action: AppStatusActions.CHANGE_APP_STATUS,
		payload: status
	};
};
