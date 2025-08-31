import type React from 'react'

import { boxStyle } from '@/components/box/box.style'
import { cn } from '@/utils/cn'

import type { BoxProps } from '@/components/box/types'

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  color,
  blur,
  ...props
}: BoxProps): Children => {
  return (
    <div {...props} className={cn(boxStyle({ className, color, blur }))}>
      {children}
    </div>
  )
}
