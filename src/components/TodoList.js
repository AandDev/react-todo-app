import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className="todo-list">
            {props.todos.map((todo) => (
                <Todo
                text={todo.text}
                key={todo.id}
                todos={props.todos}
                setTodos={props.setTodos}
                todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;