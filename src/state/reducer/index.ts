import { AppStatusReducer } from './AppStatusReducer';
import { State } from '../InitialState';
import { Action, ActionType } from '../actions';

export const stateReducer = (state: State, action: Action) => {
	switch (action.type) {
		case ActionType.APP_STATUS:
			return AppStatusReducer.reduce(state, action);
		default:
			return { ...state };
	}
};
