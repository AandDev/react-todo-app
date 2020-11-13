import React from 'react';

const Form = (props) => {
    // Funciones
    const textHandler = (e) => {
        props.setText(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        props.setTodos([...props.todos, {text: props.text, completed: false, id: Math.random() * 100}]);
        props.setText('');
    }

    return (
        <form onSubmit={addTask} className="form">
            <h2>Add a new item</h2>
            <input onChange={textHandler} value={props.text} type="text" className="text-input" placeholder="Write something"/>
            <button className="btn add-btn">
            <i className="fas fa-plus"></i>
            </button>
        </form>
    )
}

export default Form;