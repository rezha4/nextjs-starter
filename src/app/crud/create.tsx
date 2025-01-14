"use client";

import { postUser } from "@/lib/crud";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
  const router = useRouter();
  const [name, setName] = useState("");

  const onSubmit = async () => {
    if (name === "") {
      alert("name cannot be empty");
      return;
    }
    
    postUser(name);
    router.refresh();
    setName("");
  };

  return (
    <form>
      <input
        className="border p-1"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="border p-1" onClick={onSubmit}>Create</button>
    </form>
  );
}
