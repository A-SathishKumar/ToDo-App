/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, editingTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setName(editingTodo.name);
      setDescription(editingTodo.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      if (editingTodo) {
        editTodo({
          ...editingTodo,
          name,
          description
        });
      } else {
        addTodo({
          name,
          description,
          status: 'Not Completed'
        });
      }
      setName('');
      setDescription('');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success" type="submit">{editingTodo ? 'Update Todo' : 'Add Todo'}</button>
      </form>
    </div>
  );
};

export default TodoForm;
