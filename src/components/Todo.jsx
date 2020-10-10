import React from 'react';
import './style-todo.css';

export const Todo = ({todo}) => {
    return(
        <div className="todo">  
            <input type="checkbox"/>
            <li>{todo.task}</li>
            <button>X</button>
        </div>
    )
}