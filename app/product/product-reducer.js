import { Map } from "immutable";
import { pipe } from "ramda";
import { set } from "../../util/functional-immutable";
import {
  FETCH_SINGLE_PRODUCT
} from "./product-actions";


const initialState  = new Map();

const ProductsReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_SINGLE_PRODUCT:
			return set("item", action.item, state);
		default:
			return state;
	}
}


export default ProductsReducer;
