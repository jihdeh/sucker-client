import React from "react";
import {Route, IndexRoute, Router, StaticRouter} from "react-router";
import App from "./app";
import { connect } from "react-redux";
import HomeView from "./homepage";
import { getAllProducts } from "./homepage/homepage-actions";
import { getOneProduct } from "./product/product-actions";


import ProductWrapper from "./product/routes/product-wrapper";
import SingleProduct from "./product/components/single-product";

// import ErrorPage from "./static-pages/error-page";
// import About from "./static-pages/about-us";

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <h2>No Match</h2>
        <div> 404 Error</div>
      </div>
    )
  }
}

const context = {}

const SuckerRouter = ({
  history,
  dispatch,
  location
}) => (
	  <StaticRouter context={context} location={location}>
	    <App />
	  </StaticRouter>
);

export default connect()(SuckerRouter);

