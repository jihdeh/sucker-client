import axios from "axios";
import { fromJS } from "immutable";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_SINGLE_PRODUCT = "FETCH_SINGLE_PRODUCT";

export const fetchProducts = (items) => ({
  type: FETCH_PRODUCTS,
  items
});

export const fetchSingleProduct = (item) => ({
	type: FETCH_SINGLE_PRODUCT,
	item
});

export const getAllProducts = () => async dispatch => {
  try {
    const response = await axios.get(`/api/v1/products`);
    dispatch(fetchProducts(fromJS(response.data)));
  } catch (error) {
    console.trace(error);
  }
};

export const getOneProduct = (productId) => async dispatch => {
	try {
		const response = await axios.get(`/api/v1/products/${productId}`);
		dispatch(fetchSingleProduct(fromJS(response.data)));
	} catch(error) {
		console.trace(error);
	}
};
