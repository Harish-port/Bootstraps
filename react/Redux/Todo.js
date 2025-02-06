import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";

function Todo() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addTodo(input));
  };
  return (
    <div>
      <button onClick={handleSubmit}></button>
    </div>
  );
}

export default Todo;
