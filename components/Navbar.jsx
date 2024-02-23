import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-gray-100 shadow-sm">
      <nav className="flex items-center justify-between p-4">
        <div>
          <Link href={"/"} className="text-3xl font-bold">
            <Image
              className="size-8 object-cover"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              width={54}
              height={54}
            />
          </Link>
        </div>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/todos"}>Todos</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
