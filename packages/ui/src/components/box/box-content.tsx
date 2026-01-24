import type React from 'react'

import { boxContentStyle } from '@/components/box/box-content.style'
import { Column } from '@/components/column'
import { cn } from '@/lib/cn'

import type { BoxContentProps } from '@/components/box/types'

export const BoxContent: React.FC<BoxContentProps> = ({
  children,
  className,
  padding,
  ...props
}: BoxContentProps): Children => {
  return (
    <Column {...props} className={cn(boxContentStyle({ padding, className }))}>
      {children}
    </Column>
  )
}
