import React, {PropTypes} from "react";
import compose from "recompose/compose";
import setDisplayName from "recompose/setDisplayName";
import setPropTypes from "recompose/setPropTypes";
import onlyUpdateForPropTypes from "recompose/onlyUpdateForPropTypes";


const enhance = compose(
	setDisplayName("HomeView"),
	onlyUpdateForPropTypes,
	setPropTypes({
		name: PropTypes.string
	})
)

const HomeView = enhance(({
	name = "Jihdeh"
}) => (
		<div>
			<h2>Hello World, {name}</h2>
		</div>
	)
);

export default HomeView;
