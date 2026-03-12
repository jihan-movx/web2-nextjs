import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 px-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-600 dark:text-pink-400">
        About Me
      </h1>
      <p className="max-w-xl text-lg text-center mb-6">
        Hi! I'm <strong>Nurjihan Nabila Muntaz</strong>. Welcome to my Next.js project. 
        This page is a simple "About" section to showcase information about myself.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Back to Home
      </Link>
    </div>
  );
}