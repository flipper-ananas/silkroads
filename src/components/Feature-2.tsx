import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SILKROADS",
  description: "Welcome to SILKROADS",
};

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
            SILKROADS
          </span>
        </div>
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
  );
}

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SILKROADS. All rights reserved.
        </span>
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          SILKROADS
        </span>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}