import type React from 'react'

import { cn } from '@/utils/cn'

import type { CenterProps } from '@/components/center/types'

export const Center: React.FC<CenterProps> = ({
  children,
  className,
  ...props
}: CenterProps): Children => {
  return (
    <div {...props} className={cn('flex justify-center items-center', className)}>
      {children}
    </div>
  )
}
