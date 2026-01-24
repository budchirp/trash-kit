'use client'

import type React from 'react'
import { use } from 'react'

import { FieldContext } from '@/components/field/context'
import { cn } from '@/lib/cn'

import type { LabelProps } from '@/components/label/types'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}: LabelProps): Children => {
  const field = use(FieldContext)

  return (
    <label
      {...props}
      htmlFor={props.htmlFor || field?.name}
      className={cn('text-sm font-semibold text-primary cursor-pointer', className)}
    >
      {children}
    </label>
  )
}
