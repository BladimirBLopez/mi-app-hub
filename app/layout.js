import './globals.css'

export const metadata = {
  title: 'Mi App Hub | Portafolio de Desarrollo',
  description: 'Explora todas mis aplicaciones y proyectos de desarrollo',
  keywords: 'desarrollador, apps, portafolio, react, nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}