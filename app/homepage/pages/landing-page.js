import React, {PropTypes, Component} from "react";
import IPropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";
import frontPage from "../../decorators/frontpage";
import Products from "../components/products-card";


const mapStateToProps = (state, props) => ({
	productList: state.get("homePageReducer"),
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
				<div className="banner">
					<img src="/images/2-1800x705.jpg" />
				</div>
				<Products productList={productList} />
			</div>
		)
	}
}


export default connect(mapStateToProps)(HomeView);
