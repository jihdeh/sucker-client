import React from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
import IPropTypes from "react-immutable-proptypes";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import { Map, toJS } from "immutable";
import { Link } from "react-router";

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
						<Col key={ index } s={1} m={2} l={3} className='grid-example'>
				    	<Card header={<CardTitle reveal image={product.productImage} waves='light'/>}
						    title={product.productName}
						    reveal={
						    	<p>
						    		Here is some more information about this product that is only revealed once clicked on.
							    	<Link to={"/product/" + product.productId}>Buy Now</Link>
						    	</p>
						    }>
						    <p>
						    	<a href="#">
						    		{product.price} {product.currency}
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
