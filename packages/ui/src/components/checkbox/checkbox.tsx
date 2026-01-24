'use client'

import type React from 'react'
import { use, useRef } from 'react'

import { FieldContext } from '@/components/field/context'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { CheckboxProps } from '@/components/checkbox/types'

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  className,
  name,
  id,
  checked,
  onChange,
  ...props
}: CheckboxProps): Children => {
  const field = use(FieldContext)

  const ref = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        ref={ref}
        className='sr-only'
        type='checkbox'
        name={name || field?.name}
        id={id || field?.name}
        checked={checked}
        onChange={onChange}
      />

      <span
        {...props}
        className={cn(
          'size-6 flex items-center justify-center bg-surface-secondary relative border border-outline rounded-full p-1',
          checked && 'bg-surface-accent border-outline-accent hover:border-outline-accent-hover',
          className
        )}
        onClick={() => {
          ref.current?.click()
        }}
      >
        <Check
          className={cn('size-4 text-accent opacity-0 invisible', checked && 'opacity-100 visible')}
        />
      </span>
    </>
  )
}
