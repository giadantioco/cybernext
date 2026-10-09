import React from "react";

export default function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="mt-2 bg-petrol border rounded-xl text-white font-syne font-bold py-2 px-6 btn-glow cursor-pointer"
    >
      {label}
    </button>
  );
}
