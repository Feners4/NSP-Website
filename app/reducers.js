import {ADD_CART} from './actions';
import {REMOVE_CART} from './actions';
import { REHYDRATE } from 'redux-persist/constants';

export default Reducer;

var initialState = {
  cart:{},
  data: [],
  url: "/api/comments",
  pollInterval: 2000
};

function Reducer(state = initialState, action){
	switch(action.type){
		case REHYDRATE:
				if (action.payload && action.payload.cart) {
					return { ...state, ...action.payload.cart };
				}
			return state;

			case ADD_CART:
				return {
					...state,
					cart: [...state.cart, action.payload]
				}

			case REMOVE_CART:
    			return {
        			...state,
        			cart: state.cart.filter((item) => action.payload !== item)
    			}



			default:
				return state; 
	};
}

