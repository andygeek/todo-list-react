import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TodoForm = ({ addTodo }) => {
	const [todo, setTodo] = useState({
		id: '',
		task: '',
		completed: false,
	});

	const handleTaskInputChange = (e) => {
		setTodo({ ...todo, task: e.target.value });
	};

	const handlerSubmiter = (e) => {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({ ...todo, id: uuid() });
			setTodo({ ...todo, task: '' });
		}
	};

	return (
		<form onSubmit={handlerSubmiter}>
			<input
				name="task"
				type="text"
				value={todo.task}
				onChange={handleTaskInputChange}
			/>
			<label htmlFor="">
				<span>Task</span>
			</label>

			<button type="submit">add</button>
		</form>
	);
};
