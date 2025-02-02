import React from "react";
import Create from "../../features/crud/components/create";
import { getTasks } from "@/features/crud/utils/crud";
import AllTasks from "@/features/crud/components/all-tasks";

export default async function Crud() {
  const tasks = await getTasks();
  return (
    <main className="w-full grid place-items-center gap-5">
      <section>
        <p>create task:</p>
        <Create />
      </section>
      <section>
        <p>all tasks:</p>
        <AllTasks tasks={tasks} />
      </section>
    </main>
  );
}
