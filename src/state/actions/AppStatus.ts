import { ActionType } from './index';
import { Action } from './Actions';
export enum AppStatusActions {
	CHANGE_APP_STATUS
}

export const changeAppStatus = (status: boolean): Action => {
	return {
		type: ActionType.APP_STATUS,
		action: AppStatusActions.CHANGE_APP_STATUS,
		payload: status
	};
};
