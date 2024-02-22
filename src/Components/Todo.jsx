import React, { useState } from 'react';
import '../App.css';
import { addUser, deleteUser, clearUser } from '../Store/Slice/StoreSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const [newItem, setNewItem] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addUser(newItem));
    setNewItem('');
  };

  const userSelector = useSelector((state) => {
    return state.user;
  });

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  const handleClearAll = () => {
    dispatch(clearUser());
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Todo"
          onChange={handleChange}
          value={newItem}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

      <ol className="list-group">
        {userSelector.map((data, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {data}
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
        <li className="list-group-item">
          <button className="btn btn-secondary" onClick={handleClearAll}>
            Clear All
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Todo;
