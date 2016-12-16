import React, {Component} from "react"; 
import frontPage from "../../decorators/frontpage";

@frontPage()
class ProductWrapper extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		if (!this.props.children) {
			return <h1 style={{marginTop: 88}}>404</h1>
		}
		return (
			<div className="product-wrapper">
				{typeof document === "undefined" ? <div>...</div> : this.props.children }
			</div>
		)
	}
}



export default ProductWrapper;
