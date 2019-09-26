import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toggleIncart from '../../actions';


const Cart = props => {
	const productInCart = () => {
		return props.productList.filter( product => product.inCart )
			.map( (product, i) => {
				return (
					<li key={i}>
						<p>{product.productName}</p>
						<button onClick={
							() => {
								props.toggleIncart(product.productName);
							}
						}>Remove from cart</button>
					</li>
				)
			})
	}
	const productsInCart = productInCart();
	if (productsInCart.length !== 0) {
		return (
			<ul>
				{productsInCart}
			</ul>
		)
	}
	return (
		<div>
			<p>Nothing added to cart</p>
			<p>Add some at <Link to='/market'>market</Link></p>
		</div>
	)
}

function mapStateToProps (state) {
	return {productList: state.productList};
}

function mapDispatchToProps (dispatch) {
	return {
		toggleIncart: (productName) => {
			dispatch(toggleIncart(productName));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);