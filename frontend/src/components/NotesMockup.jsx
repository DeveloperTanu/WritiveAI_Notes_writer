"use client";
import Image from "next/image";

const NotesMockup = () => {
  return (
    <div className="w-full overflow-hiddenpx-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Responsive aspect-ratio wrapper */}
        <div className="relative w-full aspect-[1152/701]">
          {/* Mac Window */}
          <div
            className="
              absolute
              left-1/2
              top-0
              w-[1152px]
              -translate-x-1/2
              origin-top
              scale-[0.27]
              sm:scale-[0.45]
              md:scale-[0.65]
              lg:scale-[0.85]
              xl:scale-100
            "
          >
            <div className="overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
              {/* ========================================
                  MAC TOP BAR
              ======================================== */}
              <div className="relative flex h-11 items-center border-b border-zinc-200 bg-zinc-50 px-4">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                {/* Window title */}
                <span className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-zinc-400">
                  Writive AI
                </span>
              </div>

              {/* ========================================
                  DASHBOARD
              ======================================== */}
              <div className="flex h-[650px] bg-white">
                {/* ======================================
                    SIDEBAR
                ====================================== */}
                <aside className="flex w-52 shrink-0 flex-col border-r border-zinc-200 bg-white">
                  {/* Logo */}
                  <div className="flex items-center gap-3 px-6 py-7">
                   <Image width={20} height={20} src="/logos/logo.svg" alt="Logo" />
                    <span className="whitespace-nowrap text-base font-semibold text-blue-600">
                      Writive AI
                    </span>
                  </div>

                  {/* Signup */}
                  <div className="mt-20 px-6 text-center">
                    <p className="whitespace-nowrap text-xs text-zinc-500">
                      Sign up to use
                    </p>

                    <div className="mt-4 rounded-md bg-blue-600 py-2 text-[10px] font-medium text-white">
                      Sign up
                    </div>
                  </div>

                  {/* Sidebar actions */}
                  <div className="mt-auto space-y-5 px-6 pb-7">
                    {/* Profile */}
                    <div className="flex items-center justify-between text-xs text-zinc-600">
                      <span className="whitespace-nowrap underline underline-offset-2">
                        Profile
                      </span>

                      <span className="text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Settings */}
                    <div className="flex items-center justify-between text-xs text-zinc-600">
                      <span className="whitespace-nowrap underline underline-offset-2">
                        Settings
                      </span>

                      <span className="text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Premium */}
                    <div className="flex justify-between">
                      <div className="whitespace-nowrap text-xs text-blue-600 underline underline-offset-2">
                        Premium Benefits
                      </div>

                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </aside>

                {/* ======================================
                    MAIN CONTENT
                ====================================== */}
                <main className="flex min-w-0 flex-1 flex-col p-6">
                  {/* ====================================
                      NOTES AREA
                  ==================================== */}
                  <div className="min-h-0 flex-1 rounded-2xl bg-zinc-100 p-7">
                    <div className="mx-auto max-w-3xl">
                      {/* Heading */}
                      <div className="mb-8">
                        <p className="whitespace-nowrap text-[10px] font-semibold tracking-widest text-blue-500">
                          AI NOTES
                        </p>

                        <h1 className="mt-1 whitespace-nowrap text-xl font-semibold text-zinc-900">
                          Refine your notes
                        </h1>
                      </div>

                      {/* ==================================
                          USER MESSAGE
                      ================================== */}
                      <div className="mb-5 flex justify-end">
                        <div className="max-w-md whitespace-nowrap rounded-2xl rounded-br-sm bg-blue-600 px-5 py-3.5 text-sm leading-6 text-white">
                          Can you refine these notes and make them easier to
                          understand?
                        </div>
                      </div>

                      {/* ==================================
                          AI MESSAGE
                      ================================== */}
                      <div className="flex gap-3">
                        {/* AI Avatar */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-sm text-white shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                          ✦
                        </div>

                        {/* AI Bubble */}
                        <div className="max-w-xl rounded-2xl rounded-tl-sm bg-white p-5 shadow-sm">
                          <p className="whitespace-nowrap text-sm leading-6 text-zinc-600">
                            Absolutely. I&apos;ve refined your notes and organized
                            the important concepts into a clearer structure.
                          </p>

                          {/* Refined Notes */}
                          <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                            <h2 className="whitespace-nowrap text-sm font-semibold text-zinc-900">
                              Artificial Intelligence
                            </h2>

                            <p className="mt-2 whitespace-nowrap text-xs leading-5 text-zinc-600">
                              Artificial Intelligence enables computers to
                              perform tasks that normally require human
                              intelligence.
                            </p>

                            <h3 className="mt-4 whitespace-nowrap text-sm font-semibold text-zinc-900">
                              Machine Learning
                            </h3>

                            <p className="mt-2 whitespace-nowrap text-xs leading-5 text-zinc-600">
                              Machine learning allows systems to learn patterns
                              from data and improve their predictions over time.
                            </p>

                            <h3 className="mt-4 whitespace-nowrap text-sm font-semibold text-zinc-900">
                              Generative AI
                            </h3>

                            <p className="mt-2 whitespace-nowrap text-xs leading-5 text-zinc-600">
                              Generative AI creates new content including text,
                              images, code, and audio.
                            </p>
                          </div>

                          <p className="mt-4 whitespace-nowrap text-[10px] text-zinc-400">
                            Refined by Writive AI
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ====================================
                      GENERATION COUNTER
                  ==================================== */}
                  <div className="mt-4 flex h-11 shrink-0 items-center rounded-full border border-zinc-200 bg-white px-5 shadow-sm">
                    <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 px-4 py-1.5 text-[9px] font-medium text-white">
                      Generations left: 4/5
                    </span>
                  </div>

                  {/* ====================================
                      INPUT BAR
                  ==================================== */}
                  <div className="mt-4 flex h-14 shrink-0 items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 shadow-[0_5px_25px_rgba(0,0,0,0.06)]">
                    {/* AI Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 text-sm text-white shadow-[0_0_18px_rgba(59,130,246,0.4)]">
                      ✦
                    </div>

                    {/* Input placeholder */}
                    <span className="flex-1 whitespace-nowrap text-sm text-zinc-400">
                      Ask Writive AI to refine your notes...
                    </span>

                    {/* Refresh */}
                    <span className="shrink-0 text-xl text-zinc-700">↻</span>

                    {/* Send */}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                      →
                    </span>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesMockup;
