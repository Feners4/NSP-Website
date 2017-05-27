import {ADD_CART} from './actions';

export default reducer;

function rootReducer(state, action){
	switch(action.type){
		case ADD_CART:
			return {
				...state,
				cart: action.payload
			} 
	};
}
