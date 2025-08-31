import type React from 'react'

import { cn } from '@/utils/cn'

import type { GridProps } from '@/components/grid/types'

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  ...props
}: GridProps): Children => {
  return (
    <div
      {...props}
      className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}
    >
      {children}
    </div>
  )
}
