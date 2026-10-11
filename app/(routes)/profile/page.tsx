import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";
import { IUser } from "@/model/user";
import { labels } from "@/data/labels";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    redirect("/login");
  }

  const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    redirect("/login");
  }

  const user: IUser = await response.json();

  const memberSince = new Date(user.creationAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="flex justify-center px-4 py-8">
      <article className="w-full max-w-md bg-white border rounded-2xl border-gray-200 p-8 flex flex-col items-center text-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- avatar comes from an external API */}
        <img
          src={user.avatar}
          alt={user.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-petrol"
        />

        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>

        <span className="rounded-2xl bg-petrol p-3 text-xs font-medium uppercase tracking-wide text-white">
          {user.role}
        </span>

        <p className="text-sm text-gray-400">
          {labels.profileMemberSince} {memberSince}
        </p>

        <div className="mt-4">
          <LogoutButton />
        </div>
      </article>
    </section>
  );
}
