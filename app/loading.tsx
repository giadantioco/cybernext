export default function loading() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div
        role="status"
        aria-label="Loading"
        className="loader md:scale-200"
      ></div>
    </section>
  );
}
