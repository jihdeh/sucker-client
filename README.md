#Sucker-Client #IT'S A REACT SOMETHING :p

[WIP]An ecommerce frontend service written in react.

###Purpose

-    USING functional programming way of life using [ramdajs](http://ramdajs.com/)
-    IMPLEMENTING using a lovely reactjs wrapper called [Recompose](https://github.com/acdlite/recompose)
-    ACHIEVE solid deep wicked understanding of reactJS ES6-ES7 imuutable redux react routers and more :smiling_imp:*evil laugh*

#Functional/StateLess React.
```
const enhance = compose(
	setDisplayName("HomeView"),
	onlyUpdateForPropTypes,
	setPropTypes({
		name: PropTypes.string
	})
)

const HomeView = enhance(({
	name = "Jihdeh"
}) => (
		<div>
			<h2>Hello Worlds, {name}</h2>
		</div>
	)
);

export default HomeView;

```

React and Tools used, which i believe is what every needs in a react project

```
React
ReactDom - For rendering and ReactDom/server for server-side rendering
Redux - Connecting your Stores => views => actions together
Webpack - app bundling/ hot reload etc
Babel - Es6-7 features
Immutablejs - For an immutable react, increases perfomance of your application.
React-Router - For navigations across your app
ReactImmutableProptypes - Well this is optional, but you can make your React props immutable as well, and this is a neat wrapper for immutable props.
ReduxThunk - Well for async dispatch.
```

Optional Tools

```
Recompose - a utility belt for reactjs (very lovely if you have an eye for Higher order components)
RamdaJS - Good way to use functional programming
ISO - Helps to send data from your backend to your frontend
```

As much as i'd have loved to use material-ui, sadly it isn't working correctly.
I'm currently using react-materialze, which i hope wouldn't be a bad idea in the end, why? because i have to include Jquery..yuck!!
