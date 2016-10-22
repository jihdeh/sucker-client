import React from "react";
import compose from "recompose/compose";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";

const enhance = compose(
	setDisplayName("SingleProduct")
)

const SingleProduct = enhance(({

}) => (
	<div>
		<h2>Hello</h2>
	</div>
));

export default SingleProduct;
