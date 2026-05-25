import type React from 'react'

import { headingStyle } from '@/components/heading/heading.style'
import { cn } from '@/lib/cn'

import type { HeadingProps } from '@/components/heading/types'

export const Heading: React.FC<HeadingProps> = ({
  as,
  children,
  className,
  size,
  color,
  ...props
}: HeadingProps): Children => {
  const Component = as ?? size ?? 'h2'

  return (
    <Component {...props} className={cn(headingStyle({ size, color, className }))}>
      {children}
    </Component>
  )
}
