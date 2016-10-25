import React, {PropTypes, Component} from "react";
import compose from "recompose/compose";
import IPropTypes from "react-immutable-proptypes";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import { connect } from "react-redux";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import frontPage from "../../decorators/frontpage";
import {
	getAllProducts
} from "../homepage-actions";
import Products from "../components/products-card";


const mapStateToProps = (state, props) => ({
	productList: state.get("productList"),
});

@frontPage()
class HomeView extends Component {
	static propTypes = {
		productList: IPropTypes.map
	}
	render() {
		const { productList } = this.props;
		return (
			<div>
				<Products productList={productList} />
			</div>
		)
	}
}


export default connect(mapStateToProps)(HomeView);
