'use client'

import type React from 'react'

import { FieldProvider } from '@/components/field/context'
import { Column } from '@/components/column'
import { cn } from '@/lib/cn'

import type { FieldProps } from '@/components/field/types'

export const Field: React.FC<FieldProps> = ({
  children,
  className,
  contentClassName,
  orientation = 'vertical',
  error,
  name,
  id,
  disabled,
  required,
  ...props
}: FieldProps): React.ReactNode => {
  const fieldId = id ?? name

  return (
    <FieldProvider
      value={{
        id: fieldId,
        name,
        disabled,
        required,
        invalid: Boolean(error),
        describedBy: error ? `${fieldId}-error` : undefined
      }}
    >
      <Column {...props} className={cn('gap-1', className)}>
        <Column
          className={cn(
            orientation === 'horizontal' ? 'flex-row items-center gap-3' : 'flex-col gap-1',
            contentClassName
          )}
        >
          {children}
        </Column>

        {error && (
          <div id={`${fieldId}-error`} className='text-sm text-content-danger'>
            {error}
          </div>
        )}
      </Column>
    </FieldProvider>
  )
}
