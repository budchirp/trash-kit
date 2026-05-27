'use client'

import type React from 'react'
import { use } from 'react'

import { FieldContext } from '@/components/field/context'
import { Center } from '@/components/center'
import { Row } from '@/components/row'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { SelectProps } from '@/components/select/types'

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  name,
  id,
  disabled,
  ...props
}: SelectProps): Children => {
  const field = use(FieldContext)

  return (
    <Row
      className={cn(
        'min-h-10 w-full rounded-3xl overflow-hidden',
        'bg-surface-primary text-primary border border-outline hover:border-outline-hover focus-within:border-outline-hover py-2 px-3 gap-3 transition duration-300',
        disabled && 'opacity-50',
        className
      )}
    >
      <select
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.name}
        disabled={disabled}
        className='size-full bg-transparent disabled:cursor-not-allowed'
      >
        {children}
      </select>

      <Center className='pointer-events-none max-h-8'>
        <ChevronDown className='size-4 text-tertiary' />
      </Center>
    </Row>
  )
}
Select.displayName = 'Select'
