import {combineReducers} from "redux-immutable";
import {routerReducer} from "react-router-redux";
import homePageReducer from "./homepage/homepage-reducer";
import productReducer from "./product/product-reducer";

export default combineReducers({
	routing: routerReducer,
	productReducer,
	homePageReducer,
})
