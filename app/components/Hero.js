'use client'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 blur-2xl bg-[#6366f1]/20 rounded-full"></div>
          <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-[#6366f1]/30 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-4xl font-bold">
              👨‍💻
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text">Construyendo</span>
          <br />
          el futuro con código
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Desarrollador apasionado por crear aplicaciones que resuelven problemas reales. 
          Explora mi colección de proyectos y descubre mi evolución.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-[#6366f1] hover:bg-[#8b5cf6] rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-[#6366f1]/30"
          >
            Ver proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition backdrop-blur-sm border border-white/20"
          >
            Contactar
          </a>
        </div>

        <div className="flex gap-6 justify-center text-2xl">
          <a href="https://github.com/BladimirBLopez" className="hover:text-[#6366f1] transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-[#6366f1] transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-[#6366f1] transition transform hover:scale-110">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-gray-400 text-xl" />
      </div>
    </section>
  )
}