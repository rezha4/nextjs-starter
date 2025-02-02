"use server";

import { prisma } from "@/lib/prisma";

export const getTasks = async () => {
  return await prisma.task.findMany();
};

export const getTask = async (id: string) => {
  return await prisma.task.findFirst({
    where: {
      id,
    },
  });
};

export const createTask = async (name: string) => {
  return await prisma.task.create({
    data: {
      name,
    },
  });
};

export const deleteTask = async (id: string) => {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
};

export const editTask = async (id: string, name: string) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

