import React from 'react';


import { UseTodoProvider } from './UseTodoProvider';
import {TodoHeader} from '../TodoHeader'
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


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo, 
  } = UseTodoProvider();

  return (
    <React.Fragment>

       <TodoHeader loading={loading}>
          <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos} />
          
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}/>
      </TodoHeader> 
      
      <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}

      onError={() => <TodosError />}
      onLoanding={() => <TodosLoading />}
      onEmpyTodos={() =>  <EmptyTodos message={'¡Crea tu primer TODO!😀'}/>}
      onEmpySearchValue={() => <EmptyTodos message={'no encontramos resutados para'} searchValue={searchValue}/>}


      render={(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo}
          setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
