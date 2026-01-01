import type React from 'react'

import { cn } from '@/lib/cn'

import type { RowProps } from '@/components/row/types'

export const Row: React.FC<RowProps> = ({ children, className, ...props }: RowProps): Children => {
  return (
    <div {...props} className={cn('flex items-center gap-2', className)}>
      {children}
    </div>
  )
}
