import React, {Component} from "react";
import DefaultHeaderData from "../menu/default-menu-data";
import { Row, Col, Card } from 'antd';


export default function frontPage(
		TopHeaderData = DefaultHeaderData
	) {
	return function(Child) {
		return class extends Component {
			constructor(props) {
				super(props);
			}
			render() {
				return (
					<div>
						<header className="header">
							<Row>
								<Col xs={24} sm={24} md={6} lg={4}>
									<a className="logo" href="/">
										<img alt="logo" src="/images/deer.svg"/>
										<p className="logo-text">
											Clouded
										</p>
									</a>
								</Col>
							</Row>
						</header>
						<Child {...this.props}/>
					</div>
				)
			}
		}
	}
}
