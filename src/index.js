import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
	productList: [
		{productName: 'iPhone', inCart: false},
		{productName: 'Samsung Galaxy Note', inCart: false},
		{productName: 'OnePlus', inCart: false}
	]
} 
const store = createStore(
	reducer,
	initialState,
	applyMiddleware(thunk));

ReactDOM.render((
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Redirect exact from="/" to="/login" />
				<App />
			</Switch>
		</HashRouter>
	</Provider>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
