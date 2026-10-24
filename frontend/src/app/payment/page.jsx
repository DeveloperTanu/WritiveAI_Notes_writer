"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, Check, CreditCard, ShieldCheck } from "lucide-react";

function PaymentContent() {
  const searchParams = useSearchParams();
  const requestedBilling = searchParams.get("billing");
  const planSlug = searchParams.get("plan") || "pro";

  const [billing, setBilling] = useState(
    requestedBilling === "yearly" ? "yearly" : "monthly"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const plans = {
    monthly: {
      name: "Pro",
      price: 9,
      period: "month",
      description: "For students and regular AI users.",
    },
    yearly: {
      name: "Pro",
      price: 86,
      period: "year",
      description: "For students and regular AI users.",
    },
  };

  const plan = plans[billing];

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error(
          "Checkout is unavailable because the API URL is missing."
        );
      }

      const response = await fetch(`${apiUrl}/api/payment/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ planSlug, billing }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.message || "Unable to start secure checkout."
        );
      }

      window.location.assign(data.url);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to start secure checkout."
      );
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-5 py-12 text-zinc-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <ShieldCheck size={16} />
            Secure checkout
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Complete your{" "}
            <span className="text-blue-500">upgrade.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-500">
            You’re one step away from unlocking the full Writive AI
            experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — Order Summary */}
          <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">
                  Selected plan
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  {plan.name}
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  {plan.description}
                </p>
              </div>

              <div className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                PRO
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-1.5">
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    billing === "monthly"
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500"
                  }`}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    billing === "yearly"
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-zinc-900">
                What’s included
              </p>

              <div className="space-y-3">
                {[
                  "Unlimited AI writing",
                  "Advanced AI tools",
                  "Smart note organization",
                  "Priority AI processing",
                  "No usage limits",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-600"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
                      <Check size={13} className="text-blue-600" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 border-t border-zinc-200 pt-7">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Total</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Billed {billing}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-3xl font-semibold">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-sm text-zinc-400">
                    /{plan.period}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <CreditCard size={20} className="text-blue-600" />
              </div>

              <div>
                <h2 className="font-semibold">Payment details</h2>
                <p className="text-sm text-zinc-500">
                  Secure payment powered by Stripe
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-blue-600" />
                  <p className="text-sm font-medium text-zinc-800">
                    Secure payment with Stripe
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Continue to Stripe’s secure checkout to enter your
                  payment details. Your card information is handled by
                  Stripe.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 font-medium text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <Lock size={17} />
                  Continue to payment — ${plan.price}
                </>
              )}
            </button>

            {error && (
              <p
                role="alert"
                className="mt-4 text-center text-sm text-red-600"
              >
                {error}
              </p>
            )}

            <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-zinc-400">
              <Lock size={13} />
              Your payment details are handled securely by Stripe.
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-zinc-400">
              By completing your purchase, you agree to our Terms of
              Service and Privacy Policy.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-400">
          <span>✓ Secure checkout</span>
          <span>✓ Cancel anytime</span>
          <span>✓ Instant access</span>
        </div>
      </div>
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-white text-zinc-500">
          Loading checkout...
        </main>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}