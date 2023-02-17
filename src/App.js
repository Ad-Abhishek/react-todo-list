import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="ms-4 mt-4 w-25 p-2 square border border-3">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>TODO LIST</Navbar.Brand>
      </Navbar>

      <div className="form">
        <InputGroup className="mb-5 mt-4">
          <Form.Control
            placeholder="Enter text"
            onChange={handleChange}
            value={inputText}
          />
        </InputGroup>
        <Button onClick={addItem}>Add</Button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
