import React from "react";
import { memo } from "react";

const Todo = ({ todos }) => {
  console.log("todos");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todo);
