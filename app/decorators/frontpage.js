import React, {Component} from "react";
import DefaultHeaderData from "../menu/default-menu-data";
import { Row, Col, Card, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
								<Col xs={0} sm={0} md={18} lg={20}>
									<Menu mode="horizontal" className="lg-nav-menu">
							        	<Menu.Item className="lg-menu-item" key="mail">
							        		<Icon type="mail" />Email us
							        	</Menu.Item>
							        	<Menu.Item className="lg-menu-item" key="contact">
							        		<Icon type="customer-service" />+234xxxxxxxxxx
							        	</Menu.Item>
							        	<Menu.Item className="lg-menu-item" key="cart">
							        		<Icon type="shopping-cart" />Cart
							        	</Menu.Item>
							        	<Menu.Item className="lg-menu-item" key="account">
							        		Account
							        	</Menu.Item>
							        </Menu>
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
