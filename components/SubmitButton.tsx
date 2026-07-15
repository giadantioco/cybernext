import React from "react";

export default function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className='bg-petrol text-white font-syne font-bold py-2 px-6 hover:opacity-90 transition-opacity mt-2"'
    >
      {label}
    </button>
  );
}
