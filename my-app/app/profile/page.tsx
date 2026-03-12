import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white px-6">

      <h1 className="text-4xl font-bold mb-6 text-purple-600">
        Profile
      </h1>

      <div className="text-lg space-y-2 text-center">
        <p><strong>Name:</strong> Nurjihan Nabila Muntaz</p>
        <p><strong>NIM:</strong> 3.34.24.0.18</p>
        <p>
          <strong>Web Development Interest:</strong> 
          Interested in UI/UX design for web applications, focusing on 
          creating attractive, user-friendly interfaces and improving 
          user experience in modern websites.
        </p>
      </div>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-700"
      >
        Back to Home
      </Link>

    </div>
  );
}