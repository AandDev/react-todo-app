import React from 'react';

const Todo = (props) => {
    const completeHandler = () => {
        props.setTodos(props.todos.map(task => {
            if(task.id === props.todo.id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            } return task;
        }))
    }

    const deleteHandler = () => {
        props.setTodos(props.todos.filter(task => task.id !== props.todo.id))
    }

    return (
        <div className={`todo ${props.todo.completed ? "checked" : ""}`}>
            <p>{props.text}</p>
            <button onClick={completeHandler} className="btn todo-btn check-btn">
            <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="btn todo-btn trash-btn">
            <i className="far fa-trash-alt"></i>
            </button>
        </div>
    )
}

export default Todo;