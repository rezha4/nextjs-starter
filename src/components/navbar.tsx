import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-5 p-5 bg-gray-100">
      <Link href="/">Nextjs Starter</Link>
      <Link href="/crud">/crud</Link>
      <Link href="/rbac">/rbac</Link>
    </nav>
  )
}
