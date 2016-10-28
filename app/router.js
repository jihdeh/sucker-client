import React from "react";
import {Route, IndexRoute, Router, browserHistory} from "react-router";
import App from "./app";
import { connect } from "react-redux";
import HomeView from "./homepage";
import { 
	getAllProducts,
	getOneProduct
} from "./homepage/homepage-actions";

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

const SuckerRouter = ({
  history,
  dispatch
}) => (
	  <Router history={ history }>
	    <Route path="/" component={App}>
	      <IndexRoute
	        component={HomeView}
	        onEnter={ () => dispatch(getAllProducts())}
	        />
	        <Route
	        	path="product"
	        	component={ProductWrapper}>
	        <Route 
	        	path=":productId"
	        	component={SingleProduct}/>
	        </Route>
		      <Route path="*" component={NoMatch} />
	    </Route>
	  </Router>
);

export default connect()(SuckerRouter);

