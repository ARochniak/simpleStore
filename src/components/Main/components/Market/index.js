import React from 'react';
import { connect } from 'react-redux';
import toggleIncart from '../../actions';


const Market = props => {
	const onClickHandler = (product) => {
		if (product.inCart) props.history.push('/cart');
		else props.toggleIncart(product.productName);
	}
	const renderProducts = list => {
		const productList = list.map( (product, i) => {
			return (
				<li key={i}>
					<p>{product.productName}</p>
					<button onClick={()=>{onClickHandler(product)}}>
						{(product.inCart ? "Go to cart" : "Add to cart")}
					</button>
				</li>
				)	
			}
		)

		return productList;
	}

	return (
		<ul>
			{renderProducts(props.productList)}
		</ul>
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

export default connect (mapStateToProps, mapDispatchToProps)(Market);