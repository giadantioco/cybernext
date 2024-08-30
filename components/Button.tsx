"use client";

import { labels } from "@/data/labels";

function Button() {
  return (
    <button
      onClick={() => console.log("pippo")}
      className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
    >
      {labels.btnClick}
    </button>
  );
}

export default Button;
