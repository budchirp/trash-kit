import type React from 'react'

import { cn } from '@/utils/cn'

import type { LabelProps } from '@/components/label/types'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  id,
  ...props
}: LabelProps): Children => {
  return (
    <label {...props} htmlFor={id} className={cn('text-sm font-semibold text-primary', className)}>
      {children}
    </label>
  )
}
