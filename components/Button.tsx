"use client";

function Button() {
  return (
    <button
      onClick={() => console.log("pippo")}
      className="inline-block rounded bg-purple-600 px-4 py-2 text-xs font-medium text-white hover:bg-purple-700"
    >
      Click me!
    </button>
  );
}

export default Button;
