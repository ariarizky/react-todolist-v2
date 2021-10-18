import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Reacccc  cccct"
    },
    {
      text: "Belajar React ttt ttttttt"
    },
    {
      text: "Befsdfsdfjsdfksdfsd lfsdflajar React"
    },
    {
      text: "Belajar Reaadaljsk dl aksdlakjsdlkjasdjlasjdlja ct"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};
export default Todos;
