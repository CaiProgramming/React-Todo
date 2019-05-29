import React from "react";
import "./Todo.css";
import Form from "./TodoForm.js";
class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to your TODO list tracker</h1>
        <Form />
      </div>
    );
  }
}

export default Todo;
