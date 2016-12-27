import React, { Component } from 'react';
import { Navigator } from 'react-native';
import renderScene, { setup } from './routes';
import HomeLayout from './layout';

export { currentRoute, pushRoute, popRoute } from './routes';

export default class App extends Component {
    constructor(props) {
        super(props);
        setup(this.props.routes, this.props.defaultRoute);
    }
	render() {
		return (
			<Navigator
				initialRoute={{ id: this.props.initialRoute, index: 0 }}
				renderScene={renderScene}
				navigationBar={<HomeLayout navBar={this.props.navBar} leftPanel={this.props.leftPanel} onOpen={this.props.onOpen} onClose={this.props.onClose} leftPanelOffset={this.props.leftPanelOffset} />}
				/>
		);
	}
}