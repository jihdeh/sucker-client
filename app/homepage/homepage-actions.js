// import axios from "axios";
import { fromJS } from "immutable";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

const items = [{
  productName: "Google Vr",
  productImage: "http://www.gamecity.ch/wp-content/uploads/2016/02/PlayStation-VR-300x300.jpg",
  productId: "sku2122",
  productOwner: "Sam Dean",
  price: "2000",
  currency: "Naira"
}, {
	productName: "Apple Watch",
  productId: "sku40291",
  productImage: "http://i.ebayimg.com/images/g/buMAAOSwPe1UJGFY/s-l300.jpg",
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
