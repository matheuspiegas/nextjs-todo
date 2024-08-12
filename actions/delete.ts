"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (values: FormData) => {
  const rawId = values.get("id")?.valueOf();
  const id = Number(rawId);
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
};
