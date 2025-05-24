import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaHome, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art & Culture Hub",
  description: "Discover public art, cultural events, and local artists in your area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50"}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gradient-to-b from-blue-50 to-white border-r shadow-lg flex flex-col py-6 px-4 min-h-screen">
            <div className="mb-8 flex items-center gap-2">
              <span className="text-2xl font-extrabold text-blue-700">🎨</span>
              <span className="text-xl font-bold text-gray-800">Art & Culture Hub</span>
            </div>
            <nav className="flex flex-col gap-2">
              <a href="/" className="flex items-center gap-3 px-3 py-2 rounded font-medium transition-colors bg-blue-100 text-blue-700">
                <FaHome /> Home
              </a>
              <a href="/events" className="flex items-center gap-3 px-3 py-2 rounded font-medium transition-colors text-gray-700 hover:bg-blue-50">
                <FaCalendarAlt /> Events
              </a>
              <a href="/artists" className="flex items-center gap-3 px-3 py-2 rounded font-medium transition-colors text-gray-700 hover:bg-blue-50">
                <FaUserFriends /> Artists
              </a>
            </nav>
            <div className="mt-auto text-xs text-gray-400 pt-8 flex items-center gap-1">
              <span className="text-lg">⚡</span> Inspired by SustainLabs
            </div>
          </aside>

          {/* Main content area */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Topbar */}
            <header className="h-16 bg-white shadow sticky top-0 z-10 flex items-center px-8 justify-between">
              <h2 className="text-lg font-semibold text-gray-700">Welcome to Art & Culture Hub</h2>
              <div className="flex items-center gap-4">
                {/* Placeholder for user actions or avatar */}
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">A</div>
              </div>
            </header>
            <main className="flex-1 flex flex-col items-center py-8 px-2 sm:px-8 overflow-y-auto bg-gray-50">
              <div className="w-full max-w-6xl mx-auto">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
