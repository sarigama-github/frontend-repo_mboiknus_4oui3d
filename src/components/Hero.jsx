import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#07080B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient atmosphere overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_100%,rgba(91,33,182,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080B] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
              <span className="text-cyan-200/80 tracking-[0.3em] uppercase text-xs">Maxiki</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Ignite The Future Of Energy
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-300/90 max-w-2xl">
              Ultra‑refined formulation. Clean lift. Zero compromise. Designed for creators, athletes, and night‑runners.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#about" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white">
                <span className="relative z-10">Explore Maxiki</span>
                <span className="absolute inset-0 rounded-full blur-xl opacity-70 bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-opacity group-hover:opacity-90" />
              </a>
              <a href="#products" className="text-slate-300 hover:text-white transition-colors">View Products</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* parallax particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-12 w-2 h-2 bg-cyan-400/70 rounded-full blur-[2px] animate-pulse" />
        <div className="absolute bottom-20 right-24 w-2 h-2 bg-fuchsia-400/70 rounded-full blur-[2px] animate-pulse" />
      </div>
    </section>
  )
}

export default Hero