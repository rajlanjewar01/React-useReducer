import { useReducer } from 'react';

// Constant action types
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
	switch(action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1
			};

		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1
			};
		
		case ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0
			};

		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload
			};

		default:
			// alternate way to habdle default case
			// 1. throw an error
			// throw new Error('unexpected action type: ' + action.type);
			// 2. return the current state
			return state;
	}
}

function CounterPage({ initialCount }) {
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0
	})

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT
		});
	}

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT
		});
	}

	const handleChange = (event) => {
		const value = parseInt(event.target.value) || 0;
		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: ADD_VALUE_TO_COUNT
		});
	}

	return (
		<div>
			<h1>Count is {state.count}</h1>
			<div>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>

			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
				/>
				<button>Add it!</button>
			</form>
		</div>
	);
}

export default CounterPage;
