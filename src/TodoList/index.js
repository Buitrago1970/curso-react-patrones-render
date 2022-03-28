import React from 'react';
import './TodoList.css'

function TodoList({error, loading, searchedTodos ,onError,onLoanding,onEmpyTodos,render}) {
  return (
    <section>
      {error && onError}
      {loading && onLoanding}
      {(!loading && !searchedTodos.length) && onEmpyTodos}
      <ul>
        {searchedTodos.map(render)}
      </ul>
    </section>
  );
}

export { TodoList };
