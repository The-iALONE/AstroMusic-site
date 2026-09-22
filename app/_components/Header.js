import Link from "next/link";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">
        <Link className="text-2xl tracking-wide text-white" href="/">
          AstroMusic
        </Link>

        <div className="flex items-center gap-5 text-sm text-white/65 sm:gap-8 sm:text-base">
          <Link className="transition-colors hover:text-white" href="/download">
            Download
          </Link>
          <Link className="transition-colors hover:text-white" href="/about">
            About
          </Link>
          <Link
            aria-label="Go to AstroMusic home"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            href="/"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                d="M12.6456 33.2965C15.1845 35.4013 18.4446 36.6666 22.0003 36.6666C30.1004 36.6666 36.6669 30.1001 36.6669 21.9999C36.6669 20.9567 36.558 19.9389 36.3509 18.9572M12.6456 33.2965C9.40053 30.6063 7.33359 26.5445 7.33359 21.9999C7.33359 13.8997 13.9001 7.33325 22.0003 7.33325C29.0572 7.33325 34.95 12.3172 36.3509 18.9572M12.6456 33.2965C16.2308 32.4769 20.4959 30.7684 24.7977 28.2848C29.8034 25.3947 33.875 22.0228 36.3509 18.9572M12.6456 33.2965C8.19213 34.3146 4.78792 33.9611 3.66603 32.0179C2.51045 30.0164 4.02657 26.7609 7.33332 23.2997M36.3509 18.9572C38.6459 16.1157 39.5699 13.5373 38.5957 11.8501C37.6079 10.1392 34.8508 9.66046 31.166 10.2653"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
