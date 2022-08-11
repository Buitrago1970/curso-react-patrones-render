import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-completeIcon"></p>
        <span className="LoadingTodo-text"></span>
        <span className="LoadingTodo-completeIcon"></span>
      </div>
      <div className="LoadingTodo-container">
        <p className="LoadingTodo-completeIcon"></p>
        <span className="LoadingTodo-text"></span>
        <span className="LoadingTodo-completeIcon"></span>
      </div>
    </>


  );
}

export { TodosLoading };
