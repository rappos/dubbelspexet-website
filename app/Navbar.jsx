import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center sticky top-0 w-screen text-lg space-x-5 bg-teal-400">
      <Link href="/">Hem</Link>
      <Link href="/pa-gang">På gång</Link>
      <Link href="/om">Om</Link>
      <Link href="/intresseanmalan">Intresseanmälan</Link>
      <Link href="/biljetter">Biljetter</Link>
      <Link href="/kontakt">Kontakt</Link>
    </nav>
  );
}
