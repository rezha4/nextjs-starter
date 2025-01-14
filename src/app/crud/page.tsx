import { getUsers } from "@/lib/crud";
import React from "react";
import Create from "./create";
import AllUsers from "./all-users";

export default async function Crud() {
  const users = await getUsers();
  return (
    <main className="w-full grid place-items-center gap-5">
      <section>
        <p>create user:</p>
        <Create />
      </section>
      <section>
        <p>all users:</p>
        <AllUsers users={users} />
      </section>
    </main>
  );
}
