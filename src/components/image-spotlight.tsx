'use client'
import Image, { StaticImageData } from 'next/image'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

type ImageSpotlightProps = {
  className?: string
  src: StaticImageData
  alt: string
  sizes?: string
  width?: number
  height?: number
}

export function ImageSpotlight({
  className,
  src,
  alt,
  sizes,
  width,
  height,
}: ImageSpotlightProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          className={className}
          src={src}
          alt={alt}
          sizes={sizes}
          width={width}
          height={height}
          placeholder="blur"
        />
      </DialogTrigger>
      <DialogContent className="h-full w-screen max-w-[100vw]">
        <DialogClose className="relative overflow-hidden">
          <Image
            className="relative h-full w-full object-contain"
            src={src}
            alt={alt}
            sizes="(orientation: landscape) 100vh, 100vw"
          />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
