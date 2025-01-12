import { getAll } from "@/lib/crud";
import Create from "./create";

export default async function Home() {
  const users = await getAll();

  return (
    <main>
      <h1>Hello, World!</h1>
      <Create />
      <p>all users:</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.id}/{user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
