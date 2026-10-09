"use client";

import { useRouter } from "next/navigation";
import { labels } from "@/data/labels";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "access_token=; path=/; max-age=0";
    router.push("/login");
    router.refresh();
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        className="mt-2 btn-glow cursor-pointer rounded-xl bg-petrol px-4 py-2 text-xs font-syne font-medium text-white"
      >
        {labels.btnLogout}
      </button>
    </div>
  );
}
