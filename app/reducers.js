import {combineReducers} from "redux-immutable";
import {routerReducer} from "react-router-redux";
import productList from "./homepage/homepage-reducer";

export default combineReducers({
	routing: routerReducer,
	productList
})
