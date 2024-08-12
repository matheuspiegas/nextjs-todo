"use client";
import { create } from "@/actions/create";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

const CreateTodo = () => {
  const createTodo = async (formData: FormData) => {
    const response = await create(formData);
    if (response.message) {
      toast.success(response.message, {});
    }
    if (response.error) {
      toast.error(response.error, {});
    }
  };
  return (
    <form action={createTodo} className="flex gap-x-1 p-2">
      <input
        type="text"
        className="rounded-md p-1.5 text-base outline-none border focus:border-black/50 bg-white"
        name="todo"
        required
      />
      <SubmitButton />
    </form>
  );
};

export default CreateTodo;
