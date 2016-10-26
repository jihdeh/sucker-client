import React from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
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
	return  (
		<div>
			<Row>
				{products.items &&
					products.items.map((product, index) => 
						<Col key={ index } s={1} m={3} l={3} className="products-grid">
				    	<Card header={<CardTitle reveal image={product.productImage} waves="light"/>}
						    title={product.productName}
						    reveal={
						    	<div>
							    	<p>
							    		Here is some more information about this product that is only revealed once clicked on.
							    	</p>
								    <ProductModal product={product} />
							    </div>
						    }>
						    <p>
						    	<a href="#">
						    		$ {product.price}
						    	</a>
						    </p>
							</Card>
				    </Col>
					)
				}
			</Row>
		</div>
	)
});

export default Products;
