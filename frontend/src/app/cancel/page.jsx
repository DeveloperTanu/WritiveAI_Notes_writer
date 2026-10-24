import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-zinc-900">
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold">Checkout cancelled</h1>
        <p className="mt-4 text-zinc-500">
          No payment was made. You can return to pricing whenever you are ready.
        </p>
        <Link
          href="/pricing"
          className="mt-8 inline-block rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Back to pricing
        </Link>
      </div>
    </main>
  );
}
