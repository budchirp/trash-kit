'use client'

import type React from 'react'
import { use } from 'react'

import { FieldContext } from '@/components/field/context'
import { Upload } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { FileFieldProps } from '@/components/file-field/types'

export const FileField: React.FC<FileFieldProps> = ({
  children = 'Choose file',
  className,
  name,
  id,
  disabled,
  ...props
}: FileFieldProps): Children => {
  const field = use(FieldContext)

  return (
    <label
      className={cn(
        'min-h-10 w-full rounded-3xl overflow-hidden inline-flex items-center',
        'bg-surface-primary text-primary border border-outline hover:border-outline-hover focus-within:border-outline-hover py-2 px-3 gap-3 transition duration-300',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className
      )}
    >
      <input
        {...props}
        name={name ?? field?.name}
        id={id ?? field?.name}
        type='file'
        disabled={disabled}
        className='sr-only'
      />

      <Upload className='size-4 shrink-0 text-tertiary' />
      <span className='truncate'>{children}</span>
    </label>
  )
}
FileField.displayName = 'FileField'
