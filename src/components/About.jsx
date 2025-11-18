import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Zap, Beaker } from 'lucide-react'

const features = [
  {
    icon: Droplets,
    title: 'Crystal-Clean Taste',
    desc: 'Natural flavours crafted to feel crisp, modern and light—never heavy or syrupy.'
  },
  {
    icon: Zap,
    title: 'Immediate Lift',
    desc: 'A focused energy rise designed for flow, training, and deep work.'
  },
  {
    icon: Beaker,
    title: 'Refined Formula',
    desc: 'High-quality ingredients balanced for smooth release and zero crash.'
  }
]

function About() {
  return (
    <section id="about" className="relative bg-[#0B0C10] py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_280px_at_15%_10%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="aspect-[16/10] rounded-3xl overflow-hidden relative"
          >
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="https://cdn.coverr.co/videos/coverr-electric-liquid-1583/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Purpose-Built Energy</h2>
            <p className="mt-5 text-slate-300/90 text-lg">Maxiki is engineered for high-output days. A premium profile that wakes without the jitters—pure clarity, smooth momentum, and a finish that tastes like now.</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-cyan-400/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About