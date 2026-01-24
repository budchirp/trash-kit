import type React from 'react'

import { columnStyle } from './column.style'
import { cn } from '@/lib/cn'

import type { ColumnProps } from '@/components/column/types'

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  padding,
  ...props
}: ColumnProps): Children => {
  return (
    <div {...props} className={cn(columnStyle({ padding, className }))}>
      {children}
    </div>
  )
}
