'use client'

import type React from 'react'

import { Center } from '@/components/center'
import { useOptionalFieldContext } from '@/components/field/context'
import { Row } from '@/components/row'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

import { inputWrapperStyle } from '@/components/input/input.style'

import type { SelectProps } from '@/components/select/types'

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  selectClassName,
  name,
  id,
  disabled,
  required,
  ...props
}: SelectProps): React.ReactNode => {
  const field = useOptionalFieldContext()
  const isDisabled = disabled ?? field?.disabled

  return (
    <Row
      className={cn(
        inputWrapperStyle({ color: 'secondary', disabled: isDisabled }),
        'min-h-10 items-center gap-3 px-3 py-2',
        className
      )}
    >
      <select
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.id}
        disabled={isDisabled}
        required={required ?? field?.required}
        aria-invalid={props['aria-invalid'] ?? field?.invalid}
        aria-describedby={props['aria-describedby'] ?? field?.describedBy}
        className={cn(
          'size-full bg-transparent outline-none disabled:cursor-not-allowed',
          selectClassName
        )}
      >
        {children}
      </select>

      <Center className='pointer-events-none max-h-8'>
        <ChevronDown className='size-4 shrink-0 opacity-60' />
      </Center>
    </Row>
  )
}
