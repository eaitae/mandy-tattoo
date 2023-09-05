import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Mandy Tattoo',
  description:
    'Estúdio Mandy Tattoo - Especialista em tatuagens geek e orientais. Também oferecemos cursos e mentorias para tatuadores aspirantes e profissionais que buscam aperfeiçoamento.',
  keywords: [
    'tatuagem de anime',
    'tatuagem geek',
    'tatuagem estilo oriental',
    'mentoria para tatuadores',
    'curso de tatuagem',
    'blackwork com pouca cor',
    'tatuagem',
    'anime',
    'geek',
    'tatuagem para iniciantes',
  ],
}

export const dynamic = 'force-static'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark scroll-smooth">
      <body className={cn(ubuntu.className, 'w-screen max-w-full')}>
        {children}
      </body>
    </html>
  )
}
