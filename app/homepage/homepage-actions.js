// import axios from "axios";
import { fromJS, Map } from "immutable";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

const items = [{
  productName: "Google Vr",
  productId: "sku2122",
  productOwner: "Sam Dean",
  price: "2000",
  currency: "Naira"
}, {
	productName: "Apple Watch",
  productId: "sku40291",
  productOwner: "Babajide Fowotade",
  price: "12000",
  currency: "Dollars"
}]

export const fetchProducts = (items) => ({
	type: FETCH_PRODUCTS,
  items
})

export const getAllProducts = () => dispatch => {
	try {
		dispatch(fetchProducts(fromJS(items)))
	} catch (error) {
		console.trace(error);
	}
}
