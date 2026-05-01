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
        </div>
      </header>

      <main className="flex-1" />

      <footer className="w-full bg-white border-t border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SILKROADS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}