import type React from 'react'

import { FieldContext } from '@/components/field/context'
import { Column } from '@/components/column'
import { cn } from '@/lib/cn'

import type { FieldProps } from '@/components/field/types'

export const Field: React.FC<FieldProps> = ({
  children,
  className,
  type,
  error,
  name,
  ...props
}: FieldProps): Children => {
  return (
    <FieldContext.Provider value={{ name }}>
      <Column className='gap-1'>
        <Column
          {...props}
          className={cn(
            type === 'row' ? 'flex-row items-center gap-3' : 'flex-col gap-1',
            className
          )}
        >
          {children}
        </Column>

        {error && <div className='text-red-500'>{error}</div>}
      </Column>
    </FieldContext.Provider>
  )
}
