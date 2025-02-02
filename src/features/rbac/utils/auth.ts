import { prisma } from "@/lib/prisma";

export async function getUserFromDb(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email, password },
    // select: { id: true, email: true, name: true, password: true, role: true },
  });
  if (!user) return null;

  return user;
}
