import React, { useState } from "react";
import TodoList from "./TodoList";
const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((_, index) => index !== indexValue);
    setTodos(newTodos); 
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};
export default App;
