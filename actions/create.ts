"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const create = async (values: FormData) => {
  const todo = values.get("todo")?.toString();
  if (!todo) {
    return { error: "Invalid Fields" };
  }
  const res = await prisma.todo.create({
    data: {
      name: todo,
    },
  });
  console.log(res);
  revalidatePath("/");
  return {
    message: "Todo created!",
  };
};
