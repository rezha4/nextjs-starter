"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll() {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

export async function create(arg: string) {
  const newUser = await prisma.user.create({
    data: {
      name: arg
    }
  });

  return newUser;
}
