"use server";

import prisma from "@/lib/db";

export const listTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
