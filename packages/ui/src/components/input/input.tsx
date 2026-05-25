'use client'

import type React from 'react'
import { use } from 'react'

import { FieldContext } from '@/components/field/context'
import { Center } from '@/components/center'
import { Row } from '@/components/row'
import { cn } from '@/lib/cn'

import type { InputProps } from '@/components/input/types'

export const Input: React.FC<InputProps> = ({
  className,
  name,
  id,
  disabled,
  icons: { leading, trailing } = {},
  ...props
}: InputProps): Children => {
  const field = use(FieldContext)

  return (
    <Row
      className={cn(
        'min-h-10 max-h-48 w-full rounded-3xl overflow-hidden',
        'bg-surface-primary text-primary border border-outline hover:border-outline-hover focus-within:border-outline-hover py-2 px-3 gap-3 transition duration-300',
        disabled && 'opacity-50',
        className
      )}
    >
      {leading && <Center className='max-h-8 aspect-square'>{leading}</Center>}

      <input
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.name}
        disabled={disabled}
        className='size-full bg-transparent placeholder-tertiary disabled:cursor-not-allowed'
      />

      {trailing && <Center className='max-h-8'>{trailing}</Center>}
    </Row>
  )
}
Input.displayName = 'Input'
