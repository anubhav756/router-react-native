import React, { Component } from 'react';
import { View, BackAndroid } from 'react-native';
import Drawer from 'react-native-drawer';
import { currentRoute } from './routes';

export default class HomeLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showLeftPanel: false,
			showLeftPanelBackGround: false
		};
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.state.showLeftPanel) {
				this.toggleLeftPanel();
				return true;
			}
			return false;
		});
	}
	toggleLeftPanel() {
		if (this.state.showLeftPanel)
			this.setState({ showLeftPanel: false }, () => {
				this.props.onClose();
			});
		else if (!this.state.showLeftPanel)
			this.setState({ showLeftPanelBackGround: true }, function () {
				this.setState({ showLeftPanel: true }, () => {
					this.props.onOpen();
				});
			}.bind(this));
	}
	render() {
		if (currentRoute.hideNavBar) {
			if (this.state.showLeftPanel)
				this.setState({ showLeftPanel: false });
			if (this.state.showLeftPanelBackGround)
				this.setState({ showLeftPanelBackGround: false });
			return <View />;
		}
		return (
			<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
				<View style={{ height: 66, backgroundColor: '#2e4462', position: 'absolute', top: 0, left: 0, right: 0 }}>
					{
						React.cloneElement(this.props.navBar, {
							toggleLeftPanel: this.toggleLeftPanel.bind(this),
							showingLeftPanel: this.state.showLeftPanel,
							layoutData: this.props.layoutData
						})
					}
				</View>
				{
					this.state.showLeftPanelBackGround &&
					<View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, marginTop: 66, backgroundColor: 'rgba(1, 1, 1, 0.6)' }}>
						<Drawer
							type="overlay"
							content={
								React.cloneElement(this.props.leftPanel, {
									toggleLeftPanel: this.toggleLeftPanel.bind(this),
									showingLeftPanel: this.state.showLeftPanel,
									layoutData: this.props.layoutData
								})
							}
							open={this.state.showLeftPanel}
							onClose={() => { this.setState({ showLeftPanelBackGround: false, showLeftPanel: false }, () => { this.props.onClose(); }) } }
							tapToClose={true}
							openDrawerOffset={this.props.leftPanelOffset ? this.props.leftPanelOffset : 100}
							/>
					</View>
				}
			</View>
		);
	}
}