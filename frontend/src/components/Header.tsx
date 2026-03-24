import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500">
                <span className="text-sm font-black text-black">S</span>
              </div>
              <span className="text-lg font-black tracking-tight text-zinc-100">
                studios
              </span>
            </Link>

            <nav className="hidden items-center gap-6 sm:flex">
              <Link
                to="/"
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100"
              >
                Films
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100"
              >
                Members
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100"
              >
                Journal
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
              Sign In
            </button>
            <button className="rounded-md bg-green-500 px-4 py-1.5 text-sm font-semibold text-black hover:bg-green-400">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
