import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const addTodo = () => {
    if (currentTodo.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: currentTodo,
      completed: false
    };
    setTodos([newTask, ...todos]);
    setCurrentTodo('');
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo Application</h1>
      <div className="todo-form">
        <input type="text" 
        placeholder="Add a task"
        value={currentTodo}
        onChange={e=>setCurrentTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
            >
              ✕
            </button>
          </li>
        })}
      </ul>
    </div>
  );
}
