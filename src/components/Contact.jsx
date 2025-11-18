import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative bg-[#090B10] py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="container mx-auto px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-3 text-slate-300/90">We partner with creators, teams, and retailers who demand more from energy. Reach out below.</p>
        </div>

        <form className="mt-8 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative">
              <input id="name" name="name" placeholder=" " className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors" />
              <label htmlFor="name" className="absolute left-3 top-2 text-slate-400/80 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">Name</label>
            </div>
            <div className="relative">
              <input id="email" name="email" placeholder=" " type="email" className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors" />
              <label htmlFor="email" className="absolute left-3 top-2 text-slate-400/80 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">Email</label>
            </div>
          </div>
          <div className="relative mt-6">
            <textarea id="message" name="message" rows="5" placeholder=" " className="peer w-full rounded-xl bg-white/5 border border-white/10 px-4 pt-5 pb-2 text-white focus:outline-none focus:border-cyan-400/40 transition-colors" />
            <label htmlFor="message" className="absolute left-3 top-2 text-slate-400/80 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">Message</label>
          </div>

          <button type="button" className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white">
            <span className="relative z-10">Send</span>
            <span className="absolute inset-0 rounded-full blur-xl opacity-70 bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-opacity group-hover:opacity-90" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact