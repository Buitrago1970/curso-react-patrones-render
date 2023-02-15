import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function UseTodoProvider() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronized,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [btnAnimation, setBtnAnimation] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    setBtnAnimation("onclic");
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const state = {
    error,
    loading,
    openModal,
    btnAnimation,
    searchValue,
    sincronized,
    searchedTodos,
    totalTodos,
  };
  const stateUpdaters = {
    completeTodo,
    addTodo,
    completedTodos,
    deleteTodo,
    setOpenModal,
    setSearchValue,
  };

  return {
    state,
    stateUpdaters,
  };
}

export { UseTodoProvider };
