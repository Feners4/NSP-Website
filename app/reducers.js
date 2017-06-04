import {ADD_CART} from './actions';

export default Reducer;

var initialState = {
  cart:{},
  data: [],
  url: "/api/comments",
  pollInterval: 2000
};

function Reducer(state = initialState, action){
	switch(action.type){
		case ADD_CART:
			return {
				...state,
				cart: action.payload
			}

			default:
				return state 
	};
}

