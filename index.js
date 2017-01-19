import React, { Component } from 'react';
import { Navigator } from 'react-native';
import renderScene from './routes';
import HomeLayout from './layout';

export { currentRoute, pushRoute, popRoute } from './routes';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			layoutData: null
		};
	}
	updateLayoutData(layoutData) {
		this.setState({ layoutData });
	}
	render() {
		return (
			<Navigator
				initialRoute={{ id: this.props.initialRoute, index: 0, routes: this.props.routes, defaultRoute: this.props.defaultRoute, updateLayoutData: this.updateLayoutData.bind(this) }}
				renderScene={renderScene}
				navigationBar={<HomeLayout layoutData={this.state.layoutData} navBar={this.props.navBar} leftPanel={this.props.leftPanel} onOpen={this.props.onOpen} onClose={this.props.onClose} leftPanelOffset={this.props.leftPanelOffset} />}
				/>
		);
	}
}