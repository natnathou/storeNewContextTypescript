import React from 'react';
import { StateProvider } from '../state/StateContext';
import { stateReducer } from '../state/reducer';
import { initialState } from '../state/InitialState';
import { Test } from './Test';

export const App = (): JSX.Element => {
	return (
		<StateProvider reducer={stateReducer} initialState={initialState}>
			<Test />
		</StateProvider>
	);
};
