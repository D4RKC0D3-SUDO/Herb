'use client'

import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import Sidebar from '@/app/components/sidebar'
import SplashScreen from './components/splashscreen'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)
  const [mode, setMode] = useState('cosmic') // 'cosmic', 'forest', 'earth'

  // Splash Screen Timeout
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Load saved mode
  useEffect(() => {
    const savedMode = localStorage.getItem('herb-mode')
    if (savedMode) setMode(savedMode)
  }, [])

  // Apply mode classes
  useEffect(() => {
    document.body.classList.remove('cosmic-mode', 'forest-mode', 'earth-mode')
    document.body.classList.add(`${mode}-mode`)
    localStorage.setItem('herb-mode', mode)
  }, [mode])

  const handleModeToggle = () => {
    const nextMode = mode === 'cosmic' ? 'forest' : mode === 'forest' ? 'earth' : 'cosmic'
    setMode(nextMode)
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HERB</title>
      </head>
      <body className="font-sans transition-colors duration-500 relative">

        {/* 🌌 Fancy Background Glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className={`w-full h-full ${mode}-glow animate-pulse`}></div>
        </div>

        {/* 🌲🌌🌍 Mode Toggle */}
        <button
          onClick={handleModeToggle}
          className="mode-toggle fixed top-4 right-4 z-50 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-lg shadow-lg backdrop-blur-sm hover:scale-105 transition-transform"
        >
          {mode === 'cosmic' ? '🌌 Cosmic' : mode === 'forest' ? '🌲 Forest' : '🌍 Earth'}
        </button>

        {/* 🎬 Splash Screen */}
        <AnimatePresence>
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        </AnimatePresence>

        {/* 🧭 Layout Content */}
        {!showSplash && (
          <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="md:w-64 w-full h-screen fixed md:relative z-40">
              <Sidebar />
            </aside>

            {/* Main Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex-1 p-6 md:ml-64 overflow-x-hidden"
            >
              {children}
            </motion.main>
          </div>
        )}
      </body>
    </html>
  )
}
