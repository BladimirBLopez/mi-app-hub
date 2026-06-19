import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 AppHub. Todos los derechos reservados.
        </p>
        <p className="text-gray-400 text-sm flex items-center gap-1">
          Hecho con <FaHeart className="text-primary" /> desde cualquier lugar
        </p>
      </div>
    </footer>
  )
}