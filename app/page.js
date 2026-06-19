import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Header />
      <Hero />
      <ProjectGrid projects={projects} />
      <Footer />
    </main>
  )
}