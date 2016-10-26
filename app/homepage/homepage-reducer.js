import { Map } from "immutable";
import { pipe } from "ramda";
import { set } from "../../util/functional-immutable";
import {
  FETCH_PRODUCTS,
  FETCH_SINGLE_PRODUCT
} from "./homepage-actions";


const initialState  = new Map();

const HomepageReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_PRODUCTS:
			return set("items", action.items, state);
		case FETCH_SINGLE_PRODUCT:
			return set("item", action.item, state);
		default:
			return state;
	}
}


export default HomepageReducer;
