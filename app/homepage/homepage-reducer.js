import { Map } from "immutable";
import { pipe } from "ramda";
import { set } from "../../util/functional-immutable";
import {
  FETCH_PRODUCTS
} from "./homepage-actions";


const initialState  = new Map();

const HomepageReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_PRODUCTS:
			console.log(action)
			return set("items", action.items, state);
		default:
			return state;
	}
}


export default HomepageReducer;
