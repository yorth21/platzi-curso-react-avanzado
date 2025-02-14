import { createReducer } from "@reduxjs/toolkit";
import { addTodo, removeTodo } from "./todoActions";

type Todo = {
  id: number;
  text: string;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = { id: state.length + 1, text: action.payload };
      state.push(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    })
});

export default todoReducer;