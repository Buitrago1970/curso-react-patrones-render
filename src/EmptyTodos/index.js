import React from 'react';

function EmptyTodos({message, searchValue}) {
  return <h1 className='h1-title'>{message} {searchValue}</h1>;
}

export { EmptyTodos };
