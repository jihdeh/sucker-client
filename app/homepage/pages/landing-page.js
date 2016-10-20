import React, {PropTypes, Component} from "react";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";
import frontPage from "../../decorators/frontpage";

@frontPage()
class HomeView extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>Hello Jihdeh</p>
			</div>
		)
	}
}

export default HomeView;
