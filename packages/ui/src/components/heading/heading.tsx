import type React from 'react'

import { headingStyle } from '@/components/heading/heading.style'
import { cn } from '@/utils/cn'

import type { HeadingProps } from '@/components/heading/types'

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  size,
  color,
  ...props
}: HeadingProps): Children => {
  return (
    <h1 {...props} className={cn(headingStyle({ className, size, color }))}>
      {children}
    </h1>
  )
}
