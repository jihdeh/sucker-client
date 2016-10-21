import React, {PropTypes, Component} from "react";

class Cards extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(p, q) {
		console.log(this.props, p, q)
	}
	render() {
		return (
			<div>
				<p>Hello Cards</p>
			</div>
		)
	}
}

export default Cards;
