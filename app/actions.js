export const ADD_CART = 'ADD_CART';

export function addCart(item){
	return {
		type: ADD_CART,
		payload: item
	}
};