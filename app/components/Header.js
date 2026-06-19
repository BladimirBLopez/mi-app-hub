'use client'
import { useState } from 'react'
import { FaCode, FaMoon, FaSun } from 'react-icons/fa'

export default function Header() {
  const [isDark, setIsDark] = useState(true)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaCode className="text-[#6366f1] text-2xl" />
          <h1 className="text-xl font-bold">
            <span className="gradient-text">App</span>Hub
          </h1>
        </div>

        <nav className="flex items-center gap-8">
          <a href="#projects" className="hover:text-[#6366f1] transition">Proyectos</a>
          <a href="#about" className="hover:text-[#6366f1] transition">Sobre mí</a>
          <a href="#contact" className="hover:text-[#6366f1] transition">Contacto</a>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}