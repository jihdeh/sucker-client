import React, {PropTypes} from "react";
import {Row, Col, Modal, Button} from "react-materialize";
import compose from "recompose/compose";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import {Link} from "react-router";


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
	<Modal
	  header={product.productName}
	  trigger={
	    <Button waves="light">MODAL</Button>
	  }>
	  <Row>
	  	<Col s={12} m={6} l={6}>
	  		<img src={product.productImage} width="297" height="297"/>
	  	</Col>
	  	<Col s={12} m={6} l={6}>
	  		<ul>
	  			<li>Description: <br/>{product.productDescription}</li>
	  			<li>Amount: $ {product.price}</li>
	  			<li>
	  				<Button>
		  				<Link to={"/product/"+ product.productId}>Buy</Link>
	  				</Button>
	  			</li>
	  		</ul>
	  	</Col>
	  </Row>
	</Modal>
));

export default ProductModal;

