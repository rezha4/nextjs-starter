"use client";

import { create } from "@/lib/crud";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormSchema = {
  name: string;
};

export default function Create() {
  const router = useRouter();
  const form = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await create(data.name);
    form.reset();
    router.refresh();
  };

  return (
    <form className="p-2" onSubmit={form.handleSubmit(onSubmit)}>
      <input
        placeholder="enter name"
        className="border mr-2"
        {...(form.register("name"))}
      />
      <input className="border" type="submit" />
    </form>
  );
}
