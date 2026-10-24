import Link from "next/link";
import NotesMockup from "./NotesMockup";

const LandingPageTop = () => {
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

  return (
    <>
      <div className="flex justify-center py-24">
        <div className="space-y-4 text-center px-10 sm:px-0">
          <h1 className="text-2xl sm:text-3xl font-medium text-zinc-600 bg-zinc-100 w-fit p-2 rounded-full">
            Create clear, organized notes in seconds with AI.
          </h1>
          <p className="text-[16px] sm:text-lg text-zinc-600 font-semibold">
            Let Writive AI write them for you —{" "}
            <span className="text-blue-600">
              faster, smarter, and effortlessly.
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center px-10 md:px-40 mb-10">
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 px-20 py-2.5 rounded-lg duration-100 cursor-pointer font-medium shadow-sm hover:shadow-md sm:px-12">
            Try for free
          </button>

          <Link
            href="/pricing"
            className="flex gap-x-3 py-2.5 items-center text-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-lg duration-100 cursor-pointer font-medium px-20 sm:px-12"
          >
            Pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      <NotesMockup />

      <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              What&apos;s included
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need for
              <span className="text-blue-500"> better notes.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-500">
              Writive brings your notes, documents, and AI tools into one simple
              workspace.
            </p>
          </div>

          {/* Feature grid */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]"
              >
                {/* Icon */}
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

      {/* =====================================================
          FEATURE SHOWCASE
      ====================================================== */}
      <section className="px-6 py-28 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text */}
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
                Generate notes from a topic, refine what you&apos;ve already written,
                and ask Writive to explain difficult concepts. You stay in
                control while AI handles the tedious work.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                    ✓
                  </span>
                  <span className="text-sm text-zinc-600">
                    Generate structured notes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                    ✓
                  </span>
                  <span className="text-sm text-zinc-600">
                    Refine and rewrite content
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-600">
                    ✓
                  </span>
                  <span className="text-sm text-zinc-600">
                    Ask questions about your notes
                  </span>
                </div>
              </div>
            </div>

            {/* Product preview */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-6">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
                {/* Fake window bar */}
                <div className="flex h-10 items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <span className="ml-auto mr-auto text-[10px] text-zinc-400">
                    Writive AI
                  </span>
                </div>

                <div className="p-6">

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
    </>
  );
};

export default LandingPageTop;
