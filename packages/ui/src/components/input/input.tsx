'use client'

import type React from 'react'
import { useId } from 'react'

import { Center } from '@/components/center'
import { useOptionalFieldContext } from '@/components/field/context'
import { cn } from '@/lib/cn'

import {
  inputElementStyle,
  inputWrapperStyle,
  textareaElementStyle
} from '@/components/input/input.style'

import type { InputProps } from '@/components/input/types'

export const Input: React.FC<InputProps> = ({
  className,
  inputClassName,
  icons: { leading, trailing } = {},
  color,
  name,
  id,
  disabled,
  required,
  textarea = false,
  ...props
}: InputProps): React.ReactNode => {
  const field = useOptionalFieldContext()
  const generatedId = useId()
  const isDisabled = disabled ?? field?.disabled
  const fieldId = id ?? field?.id ?? generatedId

  const sharedProps = {
    name: name ?? field?.name,
    id: fieldId,
    disabled: isDisabled,
    required: required ?? field?.required,
    'aria-invalid': props['aria-invalid'] ?? field?.invalid,
    'aria-describedby': props['aria-describedby'] ?? field?.describedBy,
    className: cn(inputElementStyle, textarea && textareaElementStyle, inputClassName)
  }

  return (
    <label
      htmlFor={fieldId}
      className={cn(
        inputWrapperStyle({ color, disabled: isDisabled }),
        textarea ? 'min-h-24 items-start py-3' : 'min-h-10 items-center py-2.5',
        'gap-4 px-4',
        className
      )}
    >
      {leading && <Center className='max-h-8 aspect-square'>{leading}</Center>}

      {textarea ? (
        <textarea {...(props as React.ComponentProps<'textarea'>)} {...sharedProps} />
      ) : (
        <input {...(props as React.ComponentProps<'input'>)} {...sharedProps} />
      )}

      {trailing && <Center className='max-h-8'>{trailing}</Center>}
    </label>
  )
}
