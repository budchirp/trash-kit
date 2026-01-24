import type React from 'react'

import { boxStyle } from '@/components/box/box.style'
import { cn } from '@/lib/cn'

import type { BoxProps } from '@/components/box/types'

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  color,
  clickable,
  ...props
}: BoxProps): Children => {
  return (
    <div {...props} className={cn(boxStyle({ color, clickable, className }))}>
      {children}
    </div>
  )
}
