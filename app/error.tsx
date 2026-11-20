"use client";
import Image from "next/image";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => {};
};

export default function Error({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <main className="flex flex-col items-center py-10 gap-1">
      <h1>Oops, we’re temporarily down!</h1>
      <p>
        The Platzi Fake Store API seems to be taking a break. I’m on it, so try
        again in a bit.{" "}
      </p>
      <Image
        src="/the-void.svg"
        alt=""
        width={400}
        height={700}
        className="pt-10"
      />
      <button
        onClick={() => reset}
        className="rounded-full border px-6 py-2 transition hover:opacity-70"
      >
        Retry
      </button>
    </main>
  );
}
