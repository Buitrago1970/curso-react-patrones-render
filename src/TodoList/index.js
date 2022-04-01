import React from 'react';
import './TodoList.css'

function TodoList({error, loading, searchedTodos ,totalTodos,onError,onLoanding,onEmpyTodos,onEmpySearchValue,render}) {
  return (
    <section>
      {error && onError()}
      {loading && onLoanding()}
      {(!loading && totalTodos === 0) && onEmpyTodos()}
      {(totalTodos && !searchedTodos.length ) && onEmpySearchValue()}
      <ul>
        {searchedTodos.map(render)}
      </ul>
    </section>
  );
}

export { TodoList };
