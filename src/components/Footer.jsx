import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative bg-[#07080B] py-12">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.1),transparent_60%)]" />
      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="text-white font-semibold tracking-wide">Maxiki</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} Maxiki Energy Drink. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer