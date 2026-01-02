# useReducer

1) useState: 
- Absolutly fine hook to use whenever a component needs state

2) useReducer: 
- Alternate to useState
- Produces state
- Changing this state makes component rerender
- Useful when you have several different closely-related pieces of state
- Useful when future state values depends on the current state
"# React-useReducer"

### Convention of useState
- `count (state - number)`
  `valueToAdd (state - number)`

- Each piece of state defined as a separate variable

- convention

| Conventions of useState |  Conventions of useReducer  |
|:-----|:--------:|
| count (state - number) (state - object)  valueToAdd (state - number)  | `{count: 10, valueToAdd: 20}` |
|**Each piece of state defined as a separate variable**|**All state for the whole component defined in a single object**|

### Rules around Reducer functions
```javascript
const reducer = (state, action) => {
  // Whatever gets returned will be the new state!
}
```
- Whatever you return will be your new state
- if you return nothing, then your state will be undefined
- No async/await, no requests, no promises, no outside variables

### Understanding action object

```javascript
import { useReducer } from 'react';

const reducer = (state, **action**) => {
	return {
		...state,
		count: state.count + 1
	}
}

function CounterPage({ initialCount }) {
 const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0
	})

	const increment = () => {
		dispatch();
	}

	return (
		<div>
				<Button onClick={increment}>Increment</Button>
		</div>
	);
}
export default CounterPage;
```

- Event handler
```javascript
const increment = () => {
  dispatch({
    type: 'increment-count'
  });
}
```

- Event handler
```javascript
const handleChange = (event) => {
  const value = parseInt(event.target.value) || 0;

  dispatch({
    type: 'change-value',
    payload: value
  })
}
```

Notes: 
1) Whan we need to modify state, we will call dispatch and always pass in the 'action' object
2) The 'action' object will always have a 'type' property that is a string. This helps tell the reducer what state update it needs to make.
3) If we need to communicate some data to the reducer, it will be placed on the 'payload' property of the action object.
4) This is very common community convention, not a requirement. React doesn't treat these action objects any differently.
