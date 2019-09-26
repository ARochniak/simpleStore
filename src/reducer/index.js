const toggleInCart = (productList, action) => {
	return {productList: productList.map( (product) => {
				return product.productName === action.productName ? 
					{...product, inCart: !product.inCart} : product
			})};
}

export default (initialState = {}, action) => {
	switch(action.type) {
		case 'TOGGLE_INCART':
			return toggleInCart(initialState.productList, action);
		default:
			return initialState;
	}
}