import React from "react";
// import {Card, CardTitle, Row, Col} from "react-materialize";
import { Row, Col, Card } from 'antd';
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import { Map, toJS } from "immutable";
import { Link } from "react-router";
import ProductModal from "./product-modal";

const enhance = compose(
	setDisplayName("Products"),
	onlyUpdateForPropTypes,
	setPropTypes({
		productList: IPropTypes.map
	})
);

const Products = enhance(({
	productList = new Map()
}) => {
	const products = Object.assign({}, productList.toJS())
	console.log(products)
	return  (
		<div>
			<Row>
				{products.items &&
					products.items.map((product, index) => 
						<Col key={ index } span={6} className="products-grid">
				    	<Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
						    <div className="custom-image">
						    	<img alt="example" width="100%" src={product.productImage} />
						    </div>
						    <div className="custom-card">
						    	<p>{product.productName}</p>
						    	<p>$ {product.price}</p>
						    </div>
						</Card>
				    </Col>
					)
				}
			</Row>
		</div>
	)
});

export default Products;
