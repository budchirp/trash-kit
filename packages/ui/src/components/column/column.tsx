import type React from 'react'

import { cn } from '@/lib/cn'
import { columnStyle } from '@/components/column/column.style'

import type { ColumnProps } from '@/components/column/types'

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  padding,
  ...props
}: ColumnProps): React.ReactNode => {
  return (
    <div {...props} className={cn(columnStyle({ padding, className }))}>
      {children}
    </div>
  )
}
