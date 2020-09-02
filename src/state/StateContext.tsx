import React, { Reducer, createContext, useReducer, useContext } from 'react';
import { State, initialState } from './InitialState';
import { Action } from './actions';

interface Provider {
	reducer: Reducer<State, Action>;
	initialState: State;
	children?: any;
}

const Context = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null
});

export const StateProvider = ({
	reducer,
	initialState,
	children
}: Provider) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export const useDispatch = () => {
	const context = useContext(Context);
	return context.dispatch;
};

export const useGlobalState = () => {
	const context = useContext(Context);
	return context.state;
};
