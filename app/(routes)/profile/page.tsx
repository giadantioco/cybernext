import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Navbar from "@/components/navbar";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    redirect("/login");
  }

  const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await response.json();
  console.log("oggetto user:", user);

  return (
    <main>
      <Navbar />
      <section className="px-16 py-8">
        <h1 className="text-4xl font-bold py-8">User Profile</h1>
        <div className="bg-white border border-gray-200 p-8 max-w-md">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          <p className="mt-4 text-xl font-bold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2 text-sm text-gray-400">{user.role}</p>
        </div>
      </section>
    </main>
  );
}
