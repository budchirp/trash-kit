import type React from 'react'

import { cn } from '@/utils/cn'

import { boxContentStyle } from '@/components/box/box-content.style'

import type { BoxContentProps } from '@/components/box/types'
import { Column } from '../column'

export const BoxContent: React.FC<BoxContentProps> = ({
  children,
  className,
  padding,
  ...props
}: BoxContentProps): Children => {
  return (
    <Column {...props} className={cn(boxContentStyle({ className, padding }))}>
      {children}
    </Column>
  )
}
