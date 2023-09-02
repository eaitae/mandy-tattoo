'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function NotFound() {
  const router = useRouter()
  const once = useRef(true)

  useEffect(() => {
    if (once.current) {
      once.current = false
      router.replace('/')
    }
  }, [router])

  return null
}
