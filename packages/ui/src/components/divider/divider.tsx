import type React from 'react'

import { dividerStyle } from '@/components/divider/divider.style'
import { cn } from '@/lib/cn'

import type { DividerProps } from '@/components/divider/types'

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation,
  thickness,
  ...props
}: DividerProps): React.ReactNode => {
  return (
    <hr
      {...props}
      aria-orientation={orientation ?? 'horizontal'}
      className={cn(dividerStyle({ orientation, thickness, className }))}
    />
  )
}
