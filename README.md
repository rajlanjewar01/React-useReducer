### useReducer

1) useState: 
- Absolutly fine hook to use whenever a component needs state

2) useReducer: 
- Alternate to useState
- Produces state
- Changing this state makes component rerender
- Useful when you have several different closely-related pieces of state
- Useful when future state values depends on the current state
"# React-useReducer"


## Convention of useState
- `count (state - number)`
  `valueToAdd (state - number)`

- Each piece of state defined as a separate variable

- convention

| Conventions of useState |  Conventions of useReducer  |
|:-----|:--------:|
| count (state - number) (state - object)  valueToAdd (state - number)  | `{count: 10, valueToAdd: 20}` |
|**Each piece of state defined as a separate variable**|**All state for the whole component defined in a single object**|
