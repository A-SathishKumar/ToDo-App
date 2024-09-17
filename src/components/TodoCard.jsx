/* eslint-disable react/prop-types */
// import React from 'react';

const TodoCard = ({ todo, editTodo, deleteTodo, startEditing }) => {
  const handleStatusChange = (e) => {
    editTodo({
      ...todo,
      status: e.target.value
    });
  };

  return (
    <div  className="todo-card" >
      <h4> {todo.name}</h4>
      <p>Description: {todo.description}</p>
      <div>
        <label>Status: </label>
        <select  value={todo.status} onChange={handleStatusChange}>
          <option value="Not Completed">Not Completed </option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button className="btn btn-danger" onClick={() => startEditing(todo)} style={{ marginRight: '5px' }}>Edit</button>
      <button className="btn btn-danger"  onClick={() => deleteTodo(todo.name)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
    </div>
  );
};

export default TodoCard;
