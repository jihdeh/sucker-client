import React from "react";
import { Row, Col, Card } from "antd";
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
			<div className="row-gutter">
				<Row gutter={16}>
					<div className="products-headline">
						<h3>FEATURED PRODUCTS</h3>
					</div>
					{products.items &&
						products.items.map((product, index) => 
							<Col span={4} key={ index } xs={24} sm={12} md={6} lg={6} className="gutter-col">
					    	<Card bodyStyle={{ padding: 0 }} className="gutter-box">
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
		</div>
	)
});

export default Products;
