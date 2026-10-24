import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-zinc-900">
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold">Payment successful</h1>
        <p className="mt-4 text-zinc-500">
          Your subscription checkout is complete. Your plan will be available shortly.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Go to Writive AI
        </Link>
      </div>
    </main>
  );
}
