import  { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const todoData = [
    {
      name: 'Office Task 1',
      description: ' This is the Description for Todo 1',
      status: 'Not Completed'
    },
    {
      name: 'Office Task 2',
      description: 'This is the Description for Todo 2',
      status: 'Completed'
    },
    {
      name: 'Office Task 3',
      description: 'This is the Description for Todo 3',
      status: 'Not Completed'
    },
    {
      name: 'Office Task 4',
      description: 'This is the Description for Todo 4',
      status: 'Not Completed'
    }
  ];


  const [todos, setTodos] = useState(todoData);
  const [filter, setFilter] = useState('All');
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.name === updatedTodo.name ? updatedTodo : todo));
    setEditingTodo(null); // Reset editing state
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  const deleteTodo = (name) => {
    setTodos(todos.filter(todo => todo.name !== name));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    return filter === 'Completed' ? todo.status === 'Completed' : todo.status === 'Not Completed';
  });

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm 
        addTodo={addTodo} 
        editTodo={editTodo} 
        editingTodo={editingTodo}
      />
      <div className='filter-tab'>
        <h3>My Todos</h3>
        <select  value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <TodoList 
        todos={filteredTodos} 
        editTodo={editTodo} 
        deleteTodo={deleteTodo} 
        startEditing={startEditing} 
      />
    </div>
  );
}

export default App;
