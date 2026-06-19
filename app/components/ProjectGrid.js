'use client'
import { useState } from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  const [filter, setFilter] = useState('Todos')
  
  const allTags = ['Todos', ...new Set(projects.flatMap(p => p.tags))]
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter))

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {filteredProjects.length} aplicaciones construidas con pasión
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2 rounded-full transition text-sm font-medium ${
                filter === tag
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            No hay proyectos con el filtro "{filter}"
          </div>
        )}
      </div>
    </section>
  )
}