"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  const allUsers = await prisma.user.findMany();
  return allUsers;
}

export async function postUser(name: string) {
  const newUser = await prisma.user.create({
    data: {
      name,
    },
  });

  return newUser;
}

export async function deleteUser(id: string) {
  const deletedUser = await prisma.user.delete({
    where: {
      id,
    },
  });

  return deletedUser;
}

export async function editUser(id: string, name: string) {
  const editedUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  return editedUser;
}

export async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  });

  return user;
}
