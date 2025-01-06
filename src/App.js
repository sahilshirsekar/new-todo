import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
      const savedMode = localStorage.getItem('darkMode');
      if(savedMode === 'true'){
        setIsDarkMode(true);
      }
    }, [])
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode)
    }

    const addTodo = (todo, label, dueDate) => {
        setTodos([...todos, { id: Date.now(), todo, isDone: false, label, dueDate }]);
    };
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };
    const editTodo = (id, newTask, newLabel, newDueDate) => {
      setTodos(todos.map((todo) => 
        todo.id === id ? {...todo, todo : newTask, label : newLabel, dueDate: newDueDate} : todo
      ));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
      return (
          todo.todo.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (todo.dueDate && todo.dueDate.includes(searchQuery))
      );
  });
    
    return (
        <div className={isDarkMode ? "app dark" : "app"}>
          <button
            onClick={toggleDarkMode} className='dark-mode-toggle'
            >
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <h1>To-Do Application</h1>
            <input
            style={{marginBottom: "40px"}}
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
            <AddTodo addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
}

export default App;
