import React, { Suspense, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Html, useGLTF, ContactShadows } from '@react-three/drei'
import { Expand, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Bottle({ url, autoRotate = true }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} dispose={null} />
}

function Viewer({ src, title, onFullscreen }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="relative h-72">
        <Canvas camera={{ position: [0, 0, 3.2], fov: 35 }}>
          <Suspense fallback={<Html center className="text-white/70">Loading…</Html>}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <spotLight position={[0, 5, 10]} angle={0.3} intensity={0.7} penumbra={1} />
            <Bottle url={src} />
            <Environment preset="city" />
            <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={1.5} far={10} />
            <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={autoRotate ? 1.2 : 0} enableDamping dampingFactor={0.05} />
          </Suspense>
        </Canvas>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div className="text-white font-medium">{title}</div>
        <button onClick={onFullscreen} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
          <Expand size={18} />
          View Fullscreen
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
    </div>
  )
}

function FullscreenModal({ open, onClose, src, title }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }} className="relative z-10 h-full w-full p-6 sm:p-10">
            <button onClick={onClose} className="absolute top-6 right-6 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2">
              <X size={18} /> Close
            </button>
            <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-[#05060A]">
              <Canvas camera={{ position: [0, 0, 3.2], fov: 35 }}>
                <Suspense fallback={<Html center className="text-white/70">Loading…</Html>}>
                  <ambientLight intensity={0.35} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <spotLight position={[0, 8, 10]} angle={0.3} intensity={1} penumbra={1} />
                  <Bottle url={src} />
                  <Environment preset="night" />
                  <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={12} blur={1.5} far={12} />
                  <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={1.2} enableDamping dampingFactor={0.06} />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const products = [
  { key: 'strawberry', title: 'Strawberry', file: '/models/strawberry.glb' },
  { key: 'blue', title: 'Blue', file: '/models/blue.glb' },
  { key: 'bubble', title: 'Bubble', file: '/models/bubble.glb' },
  { key: 'classic', title: 'Classic', file: '/models/classic.glb' },
  { key: 'coffee', title: 'Coffee', file: '/models/coffee.glb' },
  { key: 'mango', title: 'Mango', file: '/models/mango.glb' },
  { key: 'pina', title: 'Piña', file: '/models/pina.glb' },
  { key: 'pome', title: 'Pomegranate', file: '/models/pome.glb' },
]

function Products3D() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const handleOpen = (p) => { setActive(p); setOpen(true) }
  const handleClose = () => { setOpen(false); setTimeout(() => setActive(null), 200) }

  return (
    <section id="products" className="relative bg-[#0B0C10] py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_20%_100%,rgba(236,72,153,0.1),transparent_60%)]" />

      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">3D Product Viewer</h2>
            <p className="mt-3 text-slate-300/90 max-w-2xl">Explore every flavour in high definition. Rotate, zoom, and tap fullscreen for an immersive look.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Viewer key={p.key} src={p.file} title={p.title} onFullscreen={() => handleOpen(p)} />
          ))}
        </div>
      </div>

      <FullscreenModal open={open} onClose={handleClose} src={active?.file} title={active?.title} />
    </section>
  )
}

useGLTF.preload('/models/strawberry.glb')
useGLTF.preload('/models/blue.glb')
useGLTF.preload('/models/bubble.glb')
useGLTF.preload('/models/classic.glb')
useGLTF.preload('/models/coffee.glb')
useGLTF.preload('/models/mango.glb')
useGLTF.preload('/models/pina.glb')
useGLTF.preload('/models/pome.glb')

export default Products3D