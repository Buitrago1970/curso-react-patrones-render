import React from 'react';

function EmptyTodos({message, searchValue}) {
  return <h1>{message} {searchValue}</h1>;
}

export { EmptyTodos };
