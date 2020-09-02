import { Action, AppStatusActions } from '../actions';
import { State } from '../InitialState';

export class AppStatusReducer {
	public static reduce(state: State, action: Action): State {
		switch (action.action) {
			case AppStatusActions.CHANGE_APP_STATUS:
				return this.setAppReady(state, action);
			default:
				return { ...state };
		}
	}

	private static setAppReady(state: State, action: Action) {
		const payload = action.payload;
		return { ...state, isAppReady: payload };
	}
}
