/* eslint-disable react/prop-types */
// import React from 'react';
// import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, editTodo, deleteTodo, startEditing }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoCard 
          key={todo.name} 
          todo={todo} 
          editTodo={editTodo} 
          deleteTodo={deleteTodo} 
          startEditing={startEditing} 
        />
      ))}
    </div>
  );
};

export default TodoList;

