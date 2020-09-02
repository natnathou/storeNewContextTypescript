import React, { useContext } from 'react';
import { Context } from '../state/StateContext';
import { changeAppStatus } from '../state/actions';

export const Test = () => {
	const [state, dispatch]: any = useContext(Context);
	if (!state.isAppReady) {
		dispatch(changeAppStatus(true));
	}
	return <div></div>;
};
