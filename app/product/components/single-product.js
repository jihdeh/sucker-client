import React, { PropTypes } from "react";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import lifecycle from "recompose/lifecycle";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";
import { connect } from "react-redux";
import { Row, Col, Input, Icon } from "antd";



const mapStateToProps = (state, props)  => ({
	productList: state.get("productReducer")
});

const enhance = compose(
	setDisplayName("SingleProduct"),
	onlyUpdateForPropTypes,
	setPropTypes({
		productList: IPropTypes.map,
		emitEmpty: PropTypes.func,
		onChangeSearchTerm: PropTypes.func,
		searchTerm: PropTypes.string,
	}),
	withState('searchTerm', 'onSearchTermEntered', ''),
	withHandlers({
		emitEmpty: props => (e) => {
			console.log(this, props, e)
			props.searchInputNode.focus();
			props.onSearchTermEntered('');
			// this.setState({ userName: '' });
		},
		onChangeSearchTerm: props => (e) => {
			props.onSearchTermEntered(e.target.value);
			// this.setState({ userName: e.target.value });
		}
	})
);

const SingleProduct = enhance(({
	productList = new Map(),
	onChangeSearchTerm,
	searchTerm,
	emitEmpty,
	searchInputNode,
}) => {
	const product = Object.assign({}, productList.toJS());
	const suffix = searchTerm ? <Icon type="close-circle" onClick={emitEmpty} /> : null;
	return (
		<div>
			<Row>
				<Col xs={24} sm={24} md={0} lg={0} className="mobile-product-assets">
					<div className="mobile-product-lead">
						<p>Hello</p>
					</div>
					<div className="mobile-product-search">
						<Input
							placeholder="Search our entire store"
							addonBefore={<Icon type="search" />}
							suffix={suffix}
							value={searchTerm}
							onChange={onChangeSearchTerm}
							ref={node => searchInputNode = node}
						/>
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
