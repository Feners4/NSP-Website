export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export function addCart(item){
	return {
		type: ADD_CART,
		payload: item
	}
};

export function removeCart(item){
	return{
		type:REMOVE_CART,
		payload: item
	}
};