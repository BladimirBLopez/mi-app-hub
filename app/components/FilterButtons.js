'use client'
import { useState } from 'react'

export default function FilterButtons({ tags, onFilter }) {
  const [active, setActive] = useState('Todos')

  const allTags = ['Todos', ...new Set(tags)]

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => {
            setActive(tag)
            onFilter(tag)
          }}
          className={`px-6 py-2 rounded-full transition text-sm font-medium ${
            active === tag
              ? 'bg-primary text-white shadow-lg shadow-primary/30'
              : 'bg-white/5 hover:bg-white/10 border border-white/10'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}