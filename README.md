#Sucker-Client #IT'S A REACT SOMETHING :p

[WIP]An ecommerce frontend service written in react.

###Purpose

-    USING functional programming way of life using [ramdajs](http://ramdajs.com/)
-    IMPLEMENTING using a lovely reactjs wrapper called [Recompose](https://github.com/acdlite/recompose)
-    ACHIEVE solid deep wicked understanding of reactJS ES6-ES7 imuutable redux react routers and more :smiling_imp:*evil laugh*

#Functional React.
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

As much as i'd have loved to use material-ui, sadly it isn't working correctly.
I'm currently using react-materialze, which i hope wouldn't be a bad idea in the end, why? because i have to include Jquery..yuck!!
