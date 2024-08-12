"use client";
import React from "react";
import DeleteButton from "./delete-button";

interface ListTodosProps {
  todos: {
    id: number;
    name: string;
    completed: boolean;
  }[];
}

const ListTodos = ({ todos }: ListTodosProps) => {
  return (
    <div className="w-[310px] p-2 rounded-md shadow-box  h-[300px] overflow-y-auto custom-scrollbar">
      <ul className="flex flex-col justify-center gap-y-2">
        {todos.length === 0 && (
          <p className="text-center mt-[40%]"> No todos yet!</p>
        )}
        {todos.map((todo, idx) => (
          <div
            className="flex justify-between  items-center   border rounded-md p-1.5 hover:border-black/50 transition-all"
            key={idx}
          >
            <p>{todo.name}</p>
            <DeleteButton id={todo.id} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListTodos;
