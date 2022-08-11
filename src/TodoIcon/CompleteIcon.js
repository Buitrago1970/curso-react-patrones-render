import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete, btnAnimation }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
      btnAnimation={btnAnimation}
    />
  );
}

export { CompleteIcon };
