import React, {Component} from "react";
import {Col, Menu, Icon, Dropdown } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: '1',
			openKeys: [],
		}
	}

	handleClick(e) {
		this.setState({ current: e.key });
	}

	onOpenChange(openKeys) {
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
		const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if (latestOpenKey) {
			nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		if (latestCloseKey) {
			nextOpenKeys = this.getAncestorKeys(latestCloseKey);
		}
		this.setState({ openKeys: nextOpenKeys });
	}

	getAncestorKeys(key) {
		const map = {};
		return map[key] || [];
	}

	render() {
		//For mobile Menu
		const menu = (
		    <Menu
		        mode="inline"
		        openKeys={this.state.openKeys}
		        selectedKeys={[this.state.current]}
		        style={{ width: 240 }}
		        onOpenChange={this.onOpenChange.bind(this)}
		        onClick={this.handleClick.bind(this)}
		      >
			    <Menu.Item key="home">HOME</Menu.Item>
			    <SubMenu key="products" title={<span>PRODUCTS</span>}>
			    	<Menu.Item key="1">Accessories</Menu.Item>
			    	<Menu.Item key="2">Hookahs</Menu.Item>
			    </SubMenu>
			    <SubMenu key="shopping" title={<span>SHOPPING</span>}>
			    	<Menu.Item key="3">Shop</Menu.Item>
			    	<Menu.Item key="4">Cart</Menu.Item>
			    	<Menu.Item key="5">Checkout</Menu.Item>
			    	<Menu.Item key="6">Account</Menu.Item>
			    </SubMenu>
			    <Menu.Item key="about">ABOUT US</Menu.Item>
			    <Menu.Item key="contact">CONTACT US</Menu.Item>
		    </Menu>
		);

		return (
			<span>
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
			</span>
		)
	}
}