import { useState,useRef } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddTodo = () => {
    // Ensure both name and date are not empty
    if (todoName.trim() !== '' && todoDate.trim() !== '') {
      onNewItem(todoName, todoDate);
      // Clear input fields after adding todo
      setTodoName('');
      setTodoDate('');
    } else {
      // Handle case when name or date is empty
      // For example, you can show an alert
      alert('Please enter both todo name and due date.');
    }
  };

  return (
    <div className="container text-center">
      <div className="row main-row">
        <div className="col-6">
          <input type="text" placeholder='Enter Todo Here' value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={handleAddTodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
