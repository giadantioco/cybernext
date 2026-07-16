"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/action/login";
import Navbar from "@/components/navbar";
import { labels } from "@/data/labels";
import SubmitButton from "@/components/SubmitButton";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(form.email, form.password);

      document.cookie = `access_token=${data.access_token}; path=/; max-age=${20 * 24 * 60 * 60}`;

      router.push("/profile");
      router.refresh();
    } catch (error) {
      setError("Email o password errati");
    }
  };
  return (
    <main>
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-8">
        {labels.titleLogin}
      </h1>
      <div className="px-16 py-4">
        <div className="bg-white border border-gray-200 p-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.loginEmail}
              </label>
              <input
                name="email"
                type="email"
                placeholder="john@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                {labels.loginPw}
              </label>
              <input
                name="password"
                type="password"
                placeholder="**********"
                value={form.password}
                onChange={handleChange}
                required
                className="border border-gray-200 px-4 py-2 focus:outline-none focus:border-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <SubmitButton label={labels.btnLogin} />
          </form>
        </div>
      </div>
    </main>
  );
}
