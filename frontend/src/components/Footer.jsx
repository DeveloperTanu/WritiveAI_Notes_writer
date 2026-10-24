import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 bg-zinc-100/50 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:px-12 lg:px-42">
      <div className="flex items-center justify-center gap-x-3 md:justify-start">
        <Image
          width={32}
          height={32}
          src="/logos/writiveAI_logo_black.svg"
          alt="Writive AI logo"
        />
        <p className="font-medium text-zinc-900">Writive AI</p>
      </div>

      <div className="flex min-w-0 flex-col items-center gap-4">
        <form
          action="mailto:newtannu12345@gmail.com"
          method="post"
          encType="text/plain"
          className="flex w-full max-w-md items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2 sm:min-w-[320px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 shrink-0 text-zinc-500"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email address"
            className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-zinc-400"
          />

          <button
            type="submit"
            className="shrink-0 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:px-4"
          >
            Email me
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-zinc-500">
          <a href="/terms" className="transition-colors hover:text-zinc-900">
            Terms
          </a>
          <a
            href="/privacy"
            className="transition-colors hover:text-zinc-900"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-5">
        <p className="text-sm text-zinc-600 bg-white rounded-full p-1 cursor-default">Connect with me on</p>
        <a
          href="https://github.com/DeveloperTanu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-opacity hover:opacity-60"
        >
          <Image width={20} height={20} src="/github.svg" alt="" className="dark:invert" />
        </a>

        <a
          href="https://discord.com/users/1480430529844220038"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="transition-opacity hover:opacity-60"
        >
          <Image width={20} height={20} src="/discord.svg" alt="" className="dark:brightness-0 dark:invert" />
        </a>

        <a
          href="https://www.linkedin.com/in/tanu-sharma-1b9b36417/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-opacity hover:opacity-60"
        >
          <Image width={20} height={20} src="/linkedin.svg" alt="" className="dark:brightness-0 dark:invert" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
