"use client";

import { deleteTask, editTask, getTask } from "../utils/crud";
import { useRouter } from "next/navigation";

export default function AllTasks({
  tasks,
}: {
  tasks: { id: string; name: string }[];
}) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    router.refresh();
  };

  const handleEdit = async (id: string, name: string) => {
    const newName = prompt("enter a new name", name);
    if (newName === null) return;
    await editTask(id, newName);
    router.refresh();
  };

  const handleView = async (id: string) => {
    const user = await getTask(id);
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <ul className="list-disc space-y-2">
      {tasks?.map((task) => (
        <li key={task.id}>
          {task.name}
          <button
            onClick={() => handleView(task.id)}
            className="ml-2 bg-green-300"
          >
            view
          </button>
          <button
            onClick={() => handleEdit(task.id, task.name)}
            className="ml-2 bg-blue-400"
          >
            update
          </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="ml-2 bg-red-400"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
