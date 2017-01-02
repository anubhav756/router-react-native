import React from 'react';
import { BackAndroid, View } from 'react-native';

let navigator;
let index = 1;
export let currentRoute;

let routeComponentMap = [];
let defautRouteComponent;

export const setup = (routeMap, defaultRouteName) => {
	routeComponentMap = routeMap;
	routeMap.forEach(route => {
		const key = Object.keys(route)[0];
		if (key === defaultRouteName)
			defaultRouteComponent = route[key];
	});
};

export default function (nextRoute, nav) {
	if (!navigator)
		navigator = nav;
	currentRoute = nextRoute;

	let content;
	routeComponentMap.forEach(route => {
		const key = Object.keys(route)[0];
		if (currentRoute.id === key)
			content = React.createElement(route[key]);
	});
	if (!content) {
		currentRoute.hideNavBar = true;
		return React.createElement(defaultRouteComponent);
	}
	if (currentRoute.hideNavBar)
		return content;
	return (
		<View style={{ marginTop: 66, flex: 1 }}>
			{content}
		</View>
	)
}

export const pushRoute = function (routeId, routeParams = {}, hideNavBar) {
	const previousRoutes = navigator.getCurrentRoutes().filter(item => item.id === routeId);
	if (previousRoutes.length) {
		const newRoute = { id: previousRoutes[0].id, index: previousRoutes[0].index, hideNavBar, params: routeParams };
		navigator.replaceAtIndex(newRoute, previousRoutes[0].index, () => {
			navigator.popToRoute(newRoute);
		});
	}
	else
		navigator.push({ id: routeId, index: index++, hideNavBar, params: routeParams });
}
export const popRoute = function (n = 1) {
	if (n === 0) {
		navigator.popToTop();
		index = 1;
		return true;
	}
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.popN(n);
		index--;
		return true;
	}
	return false;
}
BackAndroid.addEventListener('hardwareBackPress', popRoute);
