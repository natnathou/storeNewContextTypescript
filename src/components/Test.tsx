import React from 'react';
import { useGlobalState, useDispatch } from '../state/StateContext';
import { changeAppStatus } from '../state/actions';

export const Test = () => {
	const state = useGlobalState().isAppReady;
	const dispatch = useDispatch();
	console.log(state);
	return <div onClick={() => dispatch(changeAppStatus(true))}>Ok</div>;
};
