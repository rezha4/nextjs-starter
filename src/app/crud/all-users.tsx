"use client";

import { deleteUser, editUser, getUser } from "@/lib/crud";
import { useRouter } from "next/navigation";

export default function AllUsers({
  users,
}: {
  users: { id: string; name: string }[];
}) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    router.refresh();
  };

  const handleEdit = async (id: string, name: string) => {
    const newName = prompt("enter a new name", name);
    if (newName === null) return;
    await editUser(id, newName);
    router.refresh();
  };

  const handleView = async (id: string) => {
    const user = await getUser(id);
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <ul className="list-disc space-y-2">
      {users?.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleView(user.id)} className="ml-2 bg-green-300">
            view
          </button>
          <button
            onClick={() => handleEdit(user.id, user.name)}
            className="ml-2 bg-blue-400"
          >
            update
          </button>
          <button onClick={() => handleDelete(user.id)} className="ml-2 bg-red-400">
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
