import React, { Component } from 'react';
import { Navigator } from 'react-native';
import renderScene, { setup, currentRoute, pushRoute, popRoute } from './routes.js';
import HomeLayout from './layout.js';

export let currentRoute = currentRoute;
export let pushRoute = pushRoute;
export let popRoute = popRoute;

export default class App extends Component {
    constructor(props) {
        super(props);
        setup(this.props.routes, this.props.defaultRoute);
    }
	render() {
		return (
			<Navigator
                initialRoute={this.props.routes[this.props.initialRoute]}
				renderScene={renderScene}
				navigationBar={<HomeLayout navBar={this.props.navBar} leftPanel={this.props.leftPanel} onOpen={this.props.onOpen} onClose={this.props.onClose} leftPanelOffset={this.props.leftPanelOffset} />}
				/>
		);
	}
}