import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SILKROADS",
  description: "Welcome to SILKROADS",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-800 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase text-amber-400">
            SILKROADS
          </h1>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Main Body - Empty */}
      <main className="flex-1 bg-slate-950" />

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © 2026 SILKROADS. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
