import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import { App } from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

debugContextDevtool(document.getElementById('root'), {
	debugReducer: true,
	debugContext: false
});
