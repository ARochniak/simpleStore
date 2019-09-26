import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Market from './components/Market';
import Cart from './components/Cart';

export default (props) => {
	return (
		<Switch>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/market' component={Market}></Route>
			<Route exact path='/cart' component={Cart}></Route>
		</Switch>
		);
}