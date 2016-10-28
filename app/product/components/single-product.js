import React, {PropTypes} from "react";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";
import withHandlers from "recompose/withHandlers";
import { connect } from "react-redux";


const mapStateToProps = (state, props)  => ({
	productList: state.get("productList")
});

// const loadProductDetail = props = () => {

// }

const enhance = compose(
	setDisplayName("SingleProduct"),
	onlyUpdateForPropTypes,
	setPropTypes({
		productList: IPropTypes.map
	})
);

const SingleProduct = enhance(({
	productList = new Map()
}) => {
	const products = Object.assign({}, productList.toJS())

	console.log(products, "aha")
	return (
		<div>
			<h2>Hello</h2>
		</div>
	)
});

export default connect(mapStateToProps)(SingleProduct);
