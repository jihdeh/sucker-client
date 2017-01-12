import React from "react";
import { Row, Col, Card } from "antd";
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
			<div className="row-gutter">
				<Row gutter={16}>
					<div className="products-headline">
						<h3>FEATURED PRODUCTS</h3>
					</div>
					{products.items &&
						products.items.map((product, index) => 
							<Col span={4} key={ index } xs={12} sm={12} md={6} lg={6} className="gutter-col">
								<Link to={`/product/${product.sku}`}>
							    	<Card
							    		bodyStyle={{ padding: 0 }}
							    		className="gutter-box">
									    <div className="custom-image">
									    	<img alt="example" width="100%" src={product.productImage} />
									    </div>
									    <div className="custom-card">
									    	<p>{product.productName}</p>
									    	<p>&#x20A6; {product.price}</p>
									    </div>
									</Card>
								</Link>
					    	</Col>
						)
					}
				</Row>
			</div>
		</div>
	)
});

export default Products;
