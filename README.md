## Usage
`import NativeRouter from 'native-router';`

```
export default class MyApp extends Component {
  render() {
    return (
      <NativeRouter
        routes={[
            { index: Index },
            { login: Login },
            { register: Register },
            { users: Users },
                ...
            { defaultRouteName: DefaultRouteComponent }
            ]}
        defaultRoute='defaultRouteName'
        initialRoute='index'
        navBar={<NavBarComponent />}
        leftPanel={<LeftPanelComponent />}
        onOpen={() => { alert('Left panel opened!') }}
        onClose={() => { alert('Left panel closed!') }}
        />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);`
```

## Props
- `routes`
- `initialRoute`
- `defaultRoute`
- `navBar`
- `leftPanel`
- `onOpen`
- `onClose`
- `leftPanelOffset`

## Exports
- `currentRoute`
- `pushRoute`
- `popRoute`
- `toggleLeftPanel`
- `showingLeftPanel`

## Props for `navBar` & `leftPanel`
- `toggleLeftPanel`
- `showingLeftPanel`

[native-routing](https://www.npmjs.com/package/native-routing) NPM module