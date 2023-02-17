import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem({ completed, onComplete, btnAnimation, text, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        btnAnimation={btnAnimation}
      />
      <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
