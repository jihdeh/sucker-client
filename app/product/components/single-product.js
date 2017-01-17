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
import { Row, Col, Input, Icon, Affix, Breadcrumb } from "antd";



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
			props.onSearchTermEntered('');
		},
		onChangeSearchTerm: props => (e) => {
			props.onSearchTermEntered(e.target.value);
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
						<img src="/images/shisha_base.jpg" />
					</div>
					<div className="mobile-product-search">
						<Input
							placeholder="Search our entire store"
							addonBefore={<Icon type="search" />}
							suffix={suffix}
							value={searchTerm}
							onChange={onChangeSearchTerm}
						/>
					</div>
					<div className="mobile-product-cart">
						<p> 1 item(s) - $101.00 </p>
						<span className="cart-container">
							<Icon type="shopping-cart" />
						</span>
					</div>
				</Col>
			</Row>
			<div className="product-container">
				<div className="product-breadcrumb">
					<Breadcrumb separator=">">
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item href="">{product.item ? product.item[0].productName : '...'}</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="product-subcontainer">
					{product.item && product.item.map((item, i) =>
						<div className="product-headline">
							<h2 key={i}>{item.productName}</h2>
							<Row gutter={16}>
								<Col span={2} xs={24} sm={12} md={12} lg={12} className="gutter-col">
									<img src={item.productImage} />
						    	</Col>
						    	<Col span={2} xs={24} sm={12} md={12} lg={12} className="gutter-col">
									<div className="product-moreinfo">
										<div className="product-shipping-info">
											<Icon type="rocket" />
											<div className="sub-product-info">
												<h3>FREE SHIPPING</h3>
												<p>This product qualifies for free air shipping.</p>
											</div>
										</div>
										<div className="product-guarantee-info">
											<Icon type="dingding" />
											<div className="sub-product-info">
												<h3>7 DAYS GUARANTEE</h3>
												<p>This product comes with 7 days guarantee.</p>
											</div>
										</div>
										<div className="product-section3-info">
											<p>Brand:&nbsp; Awesome Brand</p>
											<p>Sold:&nbsp; 30</p>
											<p>Product Sku:&nbsp; {item.sku}</p>
											<p>Availability: 
												{item.inStock ? 
													<span className="product-stock-available">&nbsp; In Stock</span> : 
													<span className="product-stock-not-available">&nbsp; Not In Stock</span>
												}
											</p>
										</div>
										<div className="product-amount-info">
											<h1>&#x20A6; {item.price}</h1>
											<p>Excluding Tax: &#x20A6;{item.price}.00</p>
										</div>
										<div className="product-variations">
											<div className="product-size-variation">
												<h3>Size</h3>
												<ul className="size-variation-list">
													<li>S</li>
													<li>M</li>
													<li>L</li>
												</ul>
											</div>
											<div className="product-color-variation">
												<h3>Color</h3>
												<ul className="color-variation-list">
													<li>.</li>
													<li>.</li>
												</ul>
											</div>
										</div>
										<div className="product-add-to-cart">
											<div><span>-</span></div>
											<div><span>1</span></div>
											<div><span>+</span></div>
											<div><button type="button">ADD TO CART</button></div>
										</div>
									</div>
						    	</Col>
							</Row>
						</div>
					)}
				</div>
			</div>
		</div>
	)
});

export default connect(mapStateToProps)(SingleProduct);
