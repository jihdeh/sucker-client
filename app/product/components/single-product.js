import React, {PropTypes} from "react";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import lifecycle from "recompose/lifecycle";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";
import withHandlers from "recompose/withHandlers";
import { connect } from "react-redux";
import {Row, Col } from "antd";



const mapStateToProps = (state, props)  => ({
	productList: state.get("productReducer")
});

const enhance = compose(
	setDisplayName("SingleProduct"),
	onlyUpdateForPropTypes,
	setPropTypes({
		productList: IPropTypes.map
	}),
	lifecycle({
    componentDidMount: function() {
     // console.log('props', this.props);
    },
    componentWillReceiveProps: function (newProps) {
     // console.log('new props', newProps);
    }
  }),
);

const SingleProduct = enhance(({
	productList = new Map()
}) => {
	const product = Object.assign({}, productList.toJS());
	return (
		<div>
			<Row>
				<Col xs={6} sm={8} md={0} lg={0} className="mobile-product-assets">
					<div className="mobile-product-lead">
						<p>Hello</p>
					</div>
					<div className="mobile-product-search">
					</div>
					<div className="mobile-product-cart">

					</div>
				</Col>
			</Row>
			{product.item && product.item.map((item, i) => 
				<h2 key={i}>{item.productName}</h2>
			)}
		</div>
	)
});

export default connect(mapStateToProps)(SingleProduct);
