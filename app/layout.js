'use client'

import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import Sidebar from '@/app/components/sidebar'

// Fonts
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-[#0c0c2e] dark:text-white text-black font-sans transition-colors duration-300 relative">

        {/* 🔮 Background Glow */}
        <div className="background-glow" />

        {/* ☀️ / 🌙 Mode Toggle */}
        <button
          className="mode-toggle fixed top-4 right-4 z-50"
          onClick={() => document.body.classList.toggle('light-mode')}
        >
          ☀️ / 🌙
        </button>

        {/* 🧭 Layout */}
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-transparent via-purple-950 to-[#0c0c2e] overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
