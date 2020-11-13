import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  useEffect(() => {
    getLocalTodos();
  }, []);

  // States
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  // Effect
  useEffect(() => {
    saveLocalStorage();
  }, [todos]);

  //Local Storage
  const saveLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="inner-box">
        <Form
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
        />
        <TodoList
        text={text}
        todos={todos}
        setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
