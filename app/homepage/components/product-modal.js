import React, {PropTypes} from "react";
import compose from "recompose/compose";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import { Link } from "react-router";


const enhance = compose(
	setDisplayName("ProductModal"),
	onlyUpdateForPropTypes,
	setPropTypes({
		product: PropTypes.object
	})
);

const ProductModal = enhance(({
	product
}) => (
	<p>je</p>
));

export default ProductModal;

