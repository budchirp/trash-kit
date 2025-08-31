'use client'

import type React from 'react'

import { cn } from '@/utils/cn'

import type { InputProps } from '@/components/input/types'

export const Input: React.FC<InputProps> = ({
  className,
  icons: { leading, trailing } = {},
  ...props
}: InputProps): Children => {
  return (
    <div className='relative flex min-h-10 max-h-48 w-full items-center rounded-3xl'>
      {leading && (
        <div className='absolute inset-y-0 left-0 pl-2 flex size-10 items-center justify-center'>
          {leading}
        </div>
      )}

      <input
        {...props}
        className={cn(
          'bg-surface-primary text-primary h-auto placeholder-tertiary border-outline focus:border-outline-hover hover:border-outline-hover flex w-full items-center rounded-3xl border py-2 transition duration-300 resize-none overflow-auto',
          trailing && 'pr-12 pl-4',
          leading && 'pl-12 pr-4',
          !leading && !trailing && 'px-4',
          className
        )}
      />

      {trailing && (
        <div className='absolute inset-y-0 right-0 pr-2 flex size-10 items-center justify-center overflow-hidden'>
          {trailing}
        </div>
      )}
    </div>
  )
}
Input.displayName = 'Input'
