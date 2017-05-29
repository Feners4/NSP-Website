import {ADD_CART} from './actions';

export default Reducer;

function Reducer(state, action){
	switch(action.type){
		case ADD_CART:
			return {
				...state,
				cart: action.payload
			} 
	};
}
