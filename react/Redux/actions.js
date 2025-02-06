import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text },
  };
}

export function removeTodo(text) {
  return {
    type: REMOVE_TODO,
    payload: { text },
  };
}


