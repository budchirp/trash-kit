'use client'

import type React from 'react'
import { useState } from 'react'

import { useOptionalFieldContext } from '@/components/field/context'
import { cn } from '@/lib/cn'

import { RadioGroupProvider } from '@/components/radio-group/context'

import type { RadioGroupProps } from '@/components/radio-group/types'

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
  orientation = 'vertical',
  disabled,
  color,
  name,
  required,
  ...props
}: RadioGroupProps): React.ReactNode => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const field = useOptionalFieldContext()
  const selectedValue = value ?? internalValue
  const isDisabled = disabled ?? field?.disabled

  const handleSelect = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue)
    }

    onValueChange?.(nextValue)
  }

  return (
    <RadioGroupProvider
      value={{
        name: name ?? field?.name,
        value: selectedValue,
        disabled: isDisabled,
        required: required ?? field?.required,
        color,
        onSelect: handleSelect
      }}
    >
      <div
        {...props}
        role='radiogroup'
        aria-invalid={props['aria-invalid'] ?? field?.invalid}
        aria-describedby={props['aria-describedby'] ?? field?.describedBy}
        aria-required={required ?? field?.required}
        aria-disabled={isDisabled || undefined}
        className={cn(
          'flex w-full gap-3',
          orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
          className
        )}
      >
        {children}
      </div>
    </RadioGroupProvider>
  )
}
