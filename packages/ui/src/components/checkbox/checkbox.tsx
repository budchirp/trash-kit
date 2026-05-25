'use client'

import type React from 'react'
import { use } from 'react'

import { FieldContext } from '@/components/field/context'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { CheckboxProps } from '@/components/checkbox/types'

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  name,
  id,
  disabled,
  ...props
}: CheckboxProps): Children => {
  const field = use(FieldContext)

  return (
    <label
      className={cn(
        'inline-flex w-fit items-center gap-3 text-primary',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      )}
    >
      <input
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.name}
        type='checkbox'
        disabled={disabled}
        className='peer sr-only'
      />

      <span
        className={cn(
          'size-6 flex shrink-0 items-center justify-center bg-surface-secondary relative border border-outline rounded-full p-1',
          'peer-checked:bg-surface-accent peer-checked:border-outline-accent peer-checked:hover:border-outline-accent-hover',
          'peer-checked:[&>svg]:visible peer-checked:[&>svg]:opacity-100',
          className
        )}
      >
        <Check className='size-4 text-accent opacity-0 invisible' />
      </span>

      {children && <span>{children}</span>}
    </label>
  )
}
