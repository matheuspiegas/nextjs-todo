import { listTodos } from "@/actions/list";
import CreateTodo from "@/components/create-todo";
import ListTodos from "@/components/list-todos";
export default async function Home() {
  const todos = await listTodos();
  return (
    <main className="flex flex-col min-h-screen justify-center items-center  custom-scrollbar">
      <CreateTodo />
      <ListTodos todos={todos} />
    </main>
  );
}
