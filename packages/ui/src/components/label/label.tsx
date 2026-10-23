'use client'

import type React from 'react'

import { useOptionalFieldContext } from '@/components/field/context'
import { cn } from '@/lib/cn'

import type { LabelProps } from '@/components/label/types'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  htmlFor,
  ...props
}: LabelProps): React.ReactNode => {
  const field = useOptionalFieldContext()

  return (
    <label
      {...props}
      htmlFor={htmlFor ?? field?.id}
      className={cn('text-sm font-semibold cursor-pointer', className)}
    >
      {children}
    </label>
  )
}
