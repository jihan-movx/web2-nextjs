import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-8">

        <h1 className="text-3xl font-bold text-purple-600">
          Nurjihan Nabila Muntaz
        </h1>

        <p className="text-lg text-center">
          Welcome to my Next.js website
        </p>

        <div className="flex gap-4">

          {/* Tombol About */}
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-700"
          >
            About
          </Link>

          {/* Tombol Profile */}
          <Link
            href="/profile"
            className="px-6 py-3 rounded-full border border-black hover:bg-gray-200"
          >
            Profile
          </Link>

        </div>

      </main>
    </div>
  );
}