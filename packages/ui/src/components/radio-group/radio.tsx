'use client'

import type React from 'react'
import { useId } from 'react'

import { useOptionalFieldContext } from '@/components/field/context'
import { cn } from '@/lib/cn'

import { useRadioGroupContext } from '@/components/radio-group/context'
import { radioIndicatorStyle } from '@/components/radio-group/radio.style'

import type { RadioProps } from '@/components/radio-group/types'

export const Radio: React.FC<RadioProps> = ({
  children,
  className,
  indicatorClassName,
  color,
  value,
  name,
  id,
  disabled,
  required,
  ...props
}: RadioProps): React.ReactNode => {
  const group = useRadioGroupContext()
  const field = useOptionalFieldContext()
  const generatedId = useId()
  const isDisabled = disabled ?? group.disabled ?? field?.disabled
  const isChecked = group.value === value

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
        type='radio'
        name={name ?? group.name ?? field?.name}
        id={id ?? (field?.id ? `${field.id}-${value}` : generatedId)}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        required={required ?? group.required ?? field?.required}
        aria-invalid={props['aria-invalid'] ?? field?.invalid}
        aria-describedby={props['aria-describedby'] ?? field?.describedBy}
        onChange={() => group.onSelect(value)}
        className='peer sr-only'
      />

      <span
        className={cn(radioIndicatorStyle({ color: color ?? group.color }), indicatorClassName)}
      >
        <span className='size-2 rounded-full bg-current' />
      </span>

      {children}
    </label>
  )
}
