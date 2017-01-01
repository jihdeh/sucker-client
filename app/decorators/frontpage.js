import React, {Component} from "react";
import DefaultHeaderData from "../menu/default-menu-data";
import { Row, Col, Card, Menu, Icon, Dropdown } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
    <Menu
        mode="inline"
        style={{ width: 240 }}
      >
    <Menu.Item key="home">HOME</Menu.Item>
    <SubMenu key="products" title={<span>PRODUCTS</span>}>
          <Menu.Item key="1">Accessories</Menu.Item>
          <Menu.Item key="2">Hookahs</Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" title={<span>SHOPPING</span>}>
          <Menu.Item key="9">Shop</Menu.Item>
          <Menu.Item key="10">Cart</Menu.Item>
          <Menu.Item key="11">Checkout</Menu.Item>
          <Menu.Item key="12">Account</Menu.Item>
        </SubMenu>
	    <Menu.Item key="about">ABOUT US</Menu.Item>
	    <Menu.Item key="contact">CONTACT US</Menu.Item>

  </Menu>
);

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
								<Col xs={6} sm={8} md={0} lg={0} className="sm-nav-menu-col">
									<Dropdown overlay={menu} trigger={['click']}>
										<Icon type="bars" />
									</Dropdown>
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
