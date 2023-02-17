import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsCicked] = useState(false);

  function handleChange(event) {
    setIsCicked((isClicked) => {
      return !isClicked;
    });
  }

  return (
    <div>
      <li
        style={{ textDecoration: isClicked ? "line-through" : "none" }}
        onClick={handleChange}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
