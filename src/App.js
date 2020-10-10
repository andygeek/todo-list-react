import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm.jsx';
import { TodoList } from './components/TodoList.jsx';
import './index.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos([todo, ...todos]);
	};
	return (
		<div className="container">
			<h1>React Todo</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} />
		</div>
	);
};
