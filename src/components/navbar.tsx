'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavbarProps = {
  children?: ReactNode
}

const routes = [
  { path: '/', name: 'Home' },
  { path: '/#orcamentos', name: 'Orçamentos' },
  { path: '/mentoria', name: 'Mentoria' },
  { path: '/curso', name: 'Curso' },
] as const

export function Navbar({ children }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row-reverse md:items-start md:justify-around md:px-4 md:pt-16">
      <ul className="flex flex-wrap justify-around uppercase md:justify-end md:gap-1">
        {routes.map(({ path, name }) => (
          <li key={path}>
            <Button
              asChild
              className={cn('hover:bg-primary lg:text-2xl', {
                'underline underline-offset-8': path === pathname,
              })}
              variant="ghost"
            >
              <Link href={path}>{name}</Link>
            </Button>
          </li>
        ))}
      </ul>

      {children}
    </nav>
  )
}
