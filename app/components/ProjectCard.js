'use client'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ project }) {
  return (
    <div className="glass rounded-2xl overflow-hidden group transition-all duration-300">
      {/* Imagen */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
            🚀
          </div>
        )}
        
        {project.featured && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-primary text-xs font-bold rounded-full">
            DESTACADO
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-primary hover:bg-secondary rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt /> Demo
          </a>
          <a 
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2 border border-white/10"
          >
            <FaGithub /> Código
          </a>
        </div>
      </div>
    </div>
  )
}