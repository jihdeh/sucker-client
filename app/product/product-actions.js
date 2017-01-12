import axios from "axios";
import { fromJS } from "immutable";

export const FETCH_SINGLE_PRODUCT = "FETCH_SINGLE_PRODUCT";


export const fetchSingleProduct = (item) => ({
	type: FETCH_SINGLE_PRODUCT,
	item
});


export const getOneProduct = (productSku) => async dispatch => {
	if (typeof window == "undefined") return;
	try {
		const response = await axios.get(`/api/v1/products/${productSku}`);
		dispatch(fetchSingleProduct(fromJS(response.data)));
	} catch(error) {
		console.trace(error);
	}
};
