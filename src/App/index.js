
import React from 'react';

import { UseTodoProvider } from './UseTodoProvider';
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlert } from "../ChangeAlert"


function App() {
  const {
    state,
    stateUpdaters
  } = UseTodoProvider();

  const { error,
    loading,
    openModal,
    btnAnimation,
    searchValue,
    sincronized,
    searchedTodos,
    totalTodos, } = state
  const {
    completeTodo,
    addTodo,
    completedTodos,
    deleteTodo,
    setOpenModal,
    setSearchValue,
  } = stateUpdaters

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos} />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoanding={() => <TodosLoading />}
        onEmpyTodos={() => <EmptyTodos message={'¡Crea tu primer TODO! 😀'} />}
        onEmpySearchValue={() => <EmptyTodos message={`no encontramos resutados para "${searchValue}"`} />}
        render={(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            btnAnimation={btnAnimation}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo}
            setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert sincronized={sincronized} />
    </>
  );
}

export default App;
