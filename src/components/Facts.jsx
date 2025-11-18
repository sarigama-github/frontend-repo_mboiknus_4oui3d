import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Leaf, Rocket, FlaskConical } from 'lucide-react'

const cards = [
  { icon: Leaf, title: 'Natural Flavours', text: 'Clean, refreshing profiles inspired by modern palettes.' },
  { icon: Rocket, title: 'Fast Energy Lift', text: 'Designed for immediate focus and sustained flow.' },
  { icon: FlaskConical, title: 'High-Quality Blend', text: 'Refined formulation with premium-grade ingredients.' },
]

function Counter({ to, label }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 1200
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const value = Math.floor(progress * to)
        if (ref.current) ref.current.textContent = value
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, to, controls])

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={controls} className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"><span ref={ref}>0</span>%</div>
      <div className="mt-2 text-slate-300/80">{label}</div>
    </motion.div>
  )
}

function Facts() {
  return (
    <section className="relative bg-[#0A0B0E] py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_85%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300/80">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <Counter to={98} label="Prefer the smooth taste" />
          <Counter to={92} label="Report clean, steady focus" />
          <Counter to={89} label="Choose Maxiki post workout" />
        </div>
      </div>
    </section>
  )
}

export default Facts