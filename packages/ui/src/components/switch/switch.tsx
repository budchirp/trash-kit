'use client'

import type React from 'react'
import { useState } from 'react'

import { cn } from '@/lib/cn'
import { useOptionalFieldContext } from '@/components/field/context'

import { switchThumbStyle, switchTrackStyle } from '@/components/switch/switch.style'

import type { SwitchProps } from '@/components/switch/types'

export const Switch: React.FC<SwitchProps> = ({
  children,
  className,
  indicatorClassName,
  size,
  color,
  name,
  id,
  disabled,
  required,
  checked,
  defaultChecked,
  onChange,
  ...props
}: SwitchProps): React.ReactNode => {
  const field = useOptionalFieldContext()
  const isDisabled = disabled ?? field?.disabled
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false)
  const isChecked = checked ?? internalChecked

  return (
    <label
      className={cn(
        'inline-flex w-fit items-center gap-3',
        isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className
      )}
    >
      <span className={cn(switchTrackStyle({ size, color }), indicatorClassName)}>
        <input
          {...props}
          type='checkbox'
          role='switch'
          name={name ?? field?.name}
          id={id ?? field?.id}
          disabled={isDisabled}
          required={required ?? field?.required}
          checked={checked}
          defaultChecked={checked === undefined ? defaultChecked : undefined}
          aria-checked={isChecked}
          aria-invalid={props['aria-invalid'] ?? field?.invalid}
          aria-describedby={props['aria-describedby'] ?? field?.describedBy}
          onChange={(event) => {
            if (checked === undefined) {
              setInternalChecked(event.target.checked)
            }

            onChange?.(event)
          }}
          className='peer sr-only'
        />

        <span className={cn(switchThumbStyle({ size, color }))} />
      </span>

      {children}
    </label>
  )
}
