import type React from 'react'

import { cn } from '@/utils/cn'

import type { RowProps } from '@/components/row/types'

export const Row: React.FC<RowProps> = ({ children, className, ...props }: RowProps): Children => {
  return (
    <div {...props} className={cn('flex items-center gap-4', className)}>
      {children}
    </div>
  )
}
