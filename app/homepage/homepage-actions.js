import axios from "axios";
import { fromJS } from "immutable";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (items) => ({
  type: FETCH_PRODUCTS,
  items
})

export const getAllProducts = () => async dispatch => {
  try {
    const response = await axios.get(`/api/v1/products`);
    dispatch(fetchProducts(fromJS(response.data)));
  } catch (error) {
    console.trace(error);
  }
}

export const getOneProduct = () => async dispatch => {
	
}
