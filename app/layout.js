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

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleModeToggle = () => {
    const nextMode = mode === 'cosmic' ? 'forest' : mode === 'forest' ? 'earth' : 'cosmic'
    setMode(nextMode)

    document.body.classList.remove('cosmic-mode', 'forest-mode', 'earth-mode')
    document.body.classList.add(`${nextMode}-mode`)
  }

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HERB</title>
      </head>
      <body className="font-sans transition-colors duration-300 relative cosmic-mode">
        {/* 🔮 Background Glow */}
        <div className="background-glow" />

        {/* 🌲🌌🌍 Mode Toggle */}
        <button
          onClick={handleModeToggle}
          className="mode-toggle fixed top-4 right-4 z-50"
        >
          {mode === 'cosmic' ? '🌲 Forest' : mode === 'forest' ? '🌍 Earth' : '🌌 Cosmic'}
        </button>

        {/* 🎬 Splash Screen */}
        <AnimatePresence>
          {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        </AnimatePresence>

        {/* 🧭 Layout Content */}
        {!showSplash && (
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex-1 p-4 sm:p-6 overflow-x-hidden`}
            >
              {children}
            </motion.main>
          </div>
        )}
      </body>
    </html>
  )
}
