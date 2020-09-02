import React, { Reducer, createContext, useReducer } from 'react';
import { State } from './InitialState';

interface Provider {
	reducer: Reducer<any, any>;
	initialState: State;
	children?: any;
}

export const Context = createContext({});

export const StateProvider = ({
	reducer,
	initialState,
	children
}: Provider) => (
	<Context.Provider value={useReducer(reducer, initialState)}>
		{children}
	</Context.Provider>
);
