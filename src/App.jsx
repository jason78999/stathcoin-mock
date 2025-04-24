import React from 'react'
import { motion } from 'framer-motion'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center px-4 py-16 gap-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        “I called the spine, you know I called.”
      </motion.h1>

      <img src="/hero-bg.jpg" alt="Stath Hero" className="w-48 h-48 rounded-full border-4 border-orange-500" />

      <WalletMultiButton />

      <footer className="mt-20 flex gap-6 text-zinc-400 text-sm border-t border-zinc-700 pt-6">
        <a href="https://twitter.com/stathcoin" target="_blank" rel="noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5 inline" /> Twitter
        </a>
        <a href="https://t.me/stathchat" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://discord.gg/stathhub" target="_blank" rel="noreferrer">Discord</a>
      </footer>
    </main>
  )
}
