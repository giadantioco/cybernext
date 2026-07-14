"use client";

import Link from "next/link";

function Button({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
    >
      {label}
    </Link>
  );
}

export default Button;
