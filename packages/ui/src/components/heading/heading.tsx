import type React from 'react'

import { headingStyle } from '@/components/heading/heading.style'
import { cn } from '@/lib/cn'

import type { HeadingProps } from '@/components/heading/types'

export const Heading: React.FC<HeadingProps> = ({
  as,
  children,
  className,
  size,
  ...props
}: HeadingProps): React.ReactNode => {
  const Component = as ?? size ?? 'h2'

  return (
    <Component {...props} className={cn(headingStyle({ size, className }))}>
      {children}
    </Component>
  )
}
