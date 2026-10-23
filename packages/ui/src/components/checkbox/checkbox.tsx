'use client'

import type React from 'react'

import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useOptionalFieldContext } from '@/components/field/context'

import { checkboxIndicatorStyle } from '@/components/checkbox/checkbox.style'

import type { CheckboxProps } from '@/components/checkbox/types'

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  indicatorClassName,
  color,
  name,
  id,
  disabled,
  required,
  ...props
}: CheckboxProps): React.ReactNode => {
  const field = useOptionalFieldContext()
  const isDisabled = disabled ?? field?.disabled

  return (
    <label
      className={cn(
        'inline-flex w-fit items-center gap-3',
        isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className
      )}
    >
      <input
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.id}
        type='checkbox'
        disabled={isDisabled}
        required={required ?? field?.required}
        aria-invalid={props['aria-invalid'] ?? field?.invalid}
        aria-describedby={props['aria-describedby'] ?? field?.describedBy}
        className='peer sr-only'
      />

      <span className={cn(checkboxIndicatorStyle({ color }), indicatorClassName)}>
        <Check className='invisible size-4 opacity-0' />
      </span>

      {children}
    </label>
  )
}
