"use client";

import Link from "next/link";

type ButtonVariant = "view" | "edit";

const variantClasses: Record<ButtonVariant, string> = {
  view: "bg-purple-600 hover:bg-purple-700",
  edit: "bg-yellow-500 hover:bg-yellow/50",
};

function Button({
  label,
  href,
  variant = "view",
}: {
  label: string;
  href: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded px-4 py-2 text-xs font-medium text-white ${variantClasses[variant]}`}
    >
      {label}
    </Link>
  );
}

export default Button;
