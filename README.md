## Usage
`import NativeRouting from 'native-routing';`

```
export default class MyApp extends Component {
  render() {
    return (
      <NativeRouting
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
        leftPanelOffset={100}
        />
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);`
```

## Props
- `routes`: An array to map route ids with route's component
- `initialRoute`: id of the initial route
- `defaultRoute`: id of the default route (in case no matching route id is found)
- `navBar`: Component which will be rendered as the top navigation bar
- `leftPanel`: Component which will be rendered as the left panel
- `onOpen`: Event handler for left panel open
- `onClose`: Event handler for left panel close
- `leftPanelOffset`: Space to be left empty while opening left panel (default `100`)

## Exports
- `currentRoute`: Information about the current route
    - `currentRoute.id`: Unique route id
    - `currentRoute.params`: Route parameters
    - `currentRoute.index`: Index in the routing stack
- `pushRoute (id, params, hideNavBar)`: To go to a new route
    - `id`: The route's id
    - `params`: Optional routing parameters
    - `hideNavBar`: `true` for hiding the navigation bar for this new route
- `popRoute (n)`: Go back `n` routes (`1` by default). `0` to clear history, and go to initial route

## Props for `navBar` & `leftPanel`
- `toggleLeftPanel()`: Toggle left panel
- `showingLeftPanel`: Whether left panel is visible or not (`true/false`)


[native-routing](https://www.npmjs.com/package/native-routing) NPM module