import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ReactNode } from 'react'

type NavbarProps = {
  children?: ReactNode
}

export function Navbar({ children }: NavbarProps) {
  return (
    <nav className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:pt-16">
      <ul className="flex flex-wrap justify-around align-middle uppercase md:justify-end md:gap-8 md:px-16">
        <li>
          <Button
            asChild
            className="hover:bg-primary md:text-2xl"
            variant="ghost"
          >
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="hover:bg-primary md:text-2xl"
            variant="ghost"
          >
            <Link href="/orcamentos">Orçamentos</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="hover:bg-primary md:text-2xl"
            variant="ghost"
          >
            <Link href="/mentoria">Mentoria</Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="hover:bg-primary md:text-2xl"
            variant="ghost"
          >
            <Link href="/curso">Curso</Link>
          </Button>
        </li>
      </ul>

      {children}
    </nav>
  )
}
