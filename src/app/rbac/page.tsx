import { auth, signOut } from "@/auth";
import { SignIn } from "@/features/rbac/components/sign-in";

export default async function Rbac() {
  const session = await auth();

  return (
    <main className="w-full grid place-items-center gap-5">
      RBAC
      <p>User: {JSON.stringify(session)}</p>
      {session?.user.role === "admin" && <p>user is admin!</p>}
      {session?.user && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      )}
      <SignIn />
    </main>
  );
}
