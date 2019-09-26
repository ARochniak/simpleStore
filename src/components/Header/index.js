import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './style.css';

const Header = withRouter( props => {

	const onClickHandler = () => props.history.push('/cart');

	return (
		<header>
			<div className='header'>
				<button id='toCart' onClick={onClickHandler}>Cart</button>
				<label htmlFor='toCart'>
					{props.productList.filter( product => product.inCart).length}
				</label>
			</div>	
			<nav>
				<ul>
					<li><Link to='/market'>Market</Link></li>
					<li><Link to='/cart'>Cart</Link></li>
				</ul>
			</nav>
		</header>
	);
})

function mapStateToProps (state){ 
	return {productList: state.productList};
}

export default connect(mapStateToProps)(Header);