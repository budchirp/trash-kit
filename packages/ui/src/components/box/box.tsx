import type React from 'react'

import { boxStyle } from '@/components/box/box.style'
import { cn } from '@/lib/cn'

import type { BoxProps } from '@/components/box/types'

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  color,
  clickable,
  disabled,
  ...props
}: BoxProps): React.ReactNode => {
  return (
    <div {...props} className={cn(boxStyle({ color, clickable, disabled, className }))}>
      {children}
    </div>
  )
}
