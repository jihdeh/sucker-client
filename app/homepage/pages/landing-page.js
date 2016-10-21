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
import Cards from "./cards";
import {
	get,
	set,
	deleteField,
	toString,
	getIn,
	update,
	reduce,
} from "../../../util/functional-immutable";

const mapStateToProps = (state, props) => ({
	home: state.get("home"),
});

const mapDispatchToProps = dispatch => ({

});

@frontPage()
class HomeView extends Component {
	static propTypes = {
		home: IPropTypes.map
	}

	constructor(props) {
		super(props);
	}
	render() {
		const {home} = this.props;
		console.log(home)
		return (
			<div>
				<Cards home />
				<p>Hello Jihdeh</p>
			</div>
		)
	}
}
// const enhance = compose(
// 	setDisplayName("HomeView"),
// 	onlyUpdateForPropTypes,
// 	setPropTypes({
// 		home: IPropTypes.map,
// 	}),
// 	connect(mapStateToProps)
// );

// const HomeView = enhance(({
// 	home,

// }) => {
// 	console.log(home);
// 	return (
// 		<div>
// 				<Cards home />
// 				<p>Hello Jihdeh</p>
// 			</div>
// 	)
// });

export default connect(mapStateToProps)(HomeView);
