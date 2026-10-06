import { labels } from "@/data/labels";

export const login = async (email: string, password: string) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(labels.msgLoginError);
  }
  return response.json();
};
