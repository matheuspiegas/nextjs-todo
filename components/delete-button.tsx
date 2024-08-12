import React from "react";
import { deleteTodo } from "@/actions/delete";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <form action={deleteTodo}>
      <input type="hidden" value={id} name="id" />
      <button type="submit" className="bg-rose-950 text-white p-1 rounded-md">
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
