import type React from 'react'

import { Column } from '@/components/column'
import { cn } from '@/lib/cn'

import type { CenterProps } from '@/components/center/types'

export const Center: React.FC<CenterProps> = ({
  children,
  className,
  ...props
}: CenterProps): Children => {
  return (
    <Column {...props} className={cn('justify-center items-center text-center w-fit', className)}>
      {children}
    </Column>
  )
}
