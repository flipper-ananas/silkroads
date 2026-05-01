import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SILKROADS",
  description: "Welcome to SILKROADS",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
            SILKROADS
          </h1>
          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

      <footer className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-widest text-gray-700 uppercase">
            SILKROADS
          </span>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SILKROADS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}