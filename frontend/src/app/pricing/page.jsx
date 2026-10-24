"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const features = [
  {
    title: "Generate Notes",
    description:
      "Turn a topic, idea, or prompt into structured notes with headings, key concepts, and useful explanations.",
    icon: "✦",
  },
  {
    title: "Edit Notes",
    description:
      "Rewrite, shorten, expand, or improve your notes while keeping control over the final content.",
    icon: "✎",
  },
  {
    title: "Upload PDF",
    description:
      "Upload your study material and use AI to understand, summarize, and work with the content.",
    icon: "↑",
  },
  {
    title: "Generate PDF",
    description:
      "Turn your finished notes into a clean, organized PDF that you can save or share.",
    icon: "▣",
  },
  {
    title: "AI Chat",
    description:
      "Ask questions about your notes and get explanations without leaving your workspace.",
    icon: "◌",
  },
  {
    title: "Summarize",
    description:
      "Quickly extract the most important ideas from long notes and documents.",
    icon: "≡",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const fetchPlans = async () => {
      try {
        if (!API_URL) {
          throw new Error(
            "API URL is missing. Configure NEXT_PUBLIC_API_URL."
          );
        }

        const response = await fetch(`${API_URL}/api/plans`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Unable to load pricing plans (HTTP ${response.status}).`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The pricing API returned invalid data.");
        }

        if (isActive) {
          setPlans(data);
          setError("");
        }
      } catch (err) {
        if (!isActive) return;

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading plans."
        );
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchPlans();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <section className="px-6 pb-20 pt-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600">
            Simple, transparent pricing
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Choose a plan that
            <span className="text-blue-500">
              {" "}fits your workflow.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            Create, edit, understand, and organize your notes with Writive AI.
            Start for free and upgrade when you need more.
          </p>

          <div className="mx-auto mt-8 flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                Save more
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {loading && (
            <div
              role="status"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse rounded-2xl border border-zinc-200 p-7"
                >
                  <div className="h-5 w-24 rounded bg-zinc-200" />
                  <div className="mt-4 h-4 w-40 rounded bg-zinc-100" />
                  <div className="mt-8 h-10 w-28 rounded bg-zinc-200" />
                  <div className="mt-7 h-10 rounded bg-zinc-100" />
                  <div className="mt-8 space-y-4">
                    {[1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="h-3 rounded bg-zinc-100"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div
              role="alert"
              className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center"
            >
              <h2 className="text-lg font-semibold text-red-900">
                Unable to load pricing
              </h2>

              <p className="mt-3 text-sm leading-6 text-red-700">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && plans.length === 0 && (
            <div className="rounded-2xl border border-zinc-200 p-10 text-center">
              <h2 className="text-lg font-semibold">
                No plans available
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Please check back later.
              </p>
            </div>
          )}

          {!loading && !error && plans.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => {
                const currentPricing =
                  billing === "monthly" ? plan.monthly : plan.yearly;

                return (
                  <div
                    key={plan._id || plan.slug}
                    className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                      plan.highlighted
                        ? "border-blue-500 shadow-[0_15px_50px_rgba(59,130,246,0.14)]"
                        : "border-zinc-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-blue-500 px-4 py-1 text-[10px] font-semibold text-white">
                        MOST POPULAR
                      </div>
                    )}

                    <div>
                      <h2 className="text-lg font-semibold">
                        {plan.name}
                      </h2>

                      <p className="mt-2 min-h-10 text-sm leading-5 text-zinc-500">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mt-7">
                      <span className="text-4xl font-semibold tracking-tight">
                        {currentPricing?.price ?? "—"}
                      </span>

                      <span className="ml-2 text-sm text-zinc-400">
                        {currentPricing?.period ?? ""}
                      </span>
                    </div>

                    <Link
                      href={
                        plan.slug === "free"
                          ? "/signup"
                          : `/payment?plan=${encodeURIComponent(
                              plan.slug
                            )}&billing=${billing}`
                      }
                      className={`mt-7 block w-full rounded-md px-4 py-2.5 text-center text-sm font-medium transition ${
                        plan.highlighted
                          ? "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600"
                          : "border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100"
                      }`}
                    >
                      {plan.button}
                    </Link>

                    <div className="my-7 border-t border-zinc-200" />

                    <div className="space-y-4">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                            ✓
                          </span>

                          <span className="text-sm text-zinc-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              What&apos;s included
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need for
              <span className="text-blue-500"> better notes.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              Writive brings your notes, documents, and AI tools into one
              simple workspace.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-600 transition group-hover:bg-blue-500 group-hover:text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                AI Notes
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From messy thoughts
                <br />
                to structured notes.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-500">
                Generate notes from a topic, refine what you&apos;ve already
                written, and ask Writive to explain difficult concepts. You
                stay in control while AI handles the tedious work.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Generate structured notes",
                  "Refine and rewrite content",
                  "Ask questions about your notes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                      ✓
                    </span>
                    <span className="text-sm text-zinc-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-6">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
                <div className="flex h-10 items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-auto mr-auto text-[10px] text-zinc-400">
                    Writive AI
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-xs text-white">
                      W
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-800">
                        Biology Notes
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        Refined by Writive AI
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-5">
                    <div>
                      <div className="h-3 w-40 rounded bg-zinc-200" />
                      <div className="mt-3 h-2 w-full rounded bg-zinc-100" />
                      <div className="mt-2 h-2 w-5/6 rounded bg-zinc-100" />
                    </div>
                    <div>
                      <div className="h-3 w-32 rounded bg-zinc-200" />
                      <div className="mt-3 h-2 w-full rounded bg-zinc-100" />
                      <div className="mt-2 h-2 w-4/5 rounded bg-zinc-100" />
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                      <div className="h-2 w-24 rounded bg-blue-200" />
                      <div className="mt-3 h-2 w-full rounded bg-blue-100" />
                      <div className="mt-2 h-2 w-4/5 rounded bg-blue-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center sm:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to make your notes
            <span className="text-blue-500"> work harder?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
            Start with Writive for free and see how much easier studying can
            feel.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-block rounded-md bg-blue-500 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-400 active:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
