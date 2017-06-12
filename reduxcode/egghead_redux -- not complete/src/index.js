import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const addCounter = (list) => {
	list.push(0);
	return list;
}

const removeCounter = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];
}

const incrementCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
	];
}

const toggleTodo = (todo) => {
	return {
		...todo,
		completed: !todo.completed
	};
}

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t,action));
		default:
			return state;
	}
}

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
}

const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

const store = createStore(counter);

let nextTodoId = 0;

class TodoApp extends Component {
	render() {
		return (
			<div>
				<input ref={node => {
					 this.input = node;
				}} />
				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: this.input.value,
						id: nextTodoId++
						});
					this.input.value = ';'
					}}>
				    Add ToDo
				</button>
				<ul>
					{this.props.todos.map(todo =>
						<li key={todo.id}>
						 {todo.text}
						</li>
					)}
				</ul>
			</div>
	  	);
	}
}

const render = () => {
	ReactDom.render(
		<TodoApp
		todos={store.getState().todos}
	 	/>,
		document.getElementById('root')
	);
}

store.subscribe(render);
render();
