'use client'

import type React from 'react'
import { use, useRef, useState } from 'react'

import { FieldContext } from '@/components/field/context'
import { Box, BoxContent } from '@/components/box'
import { Heading } from '@/components/heading'
import { Column } from '@/components/column'
import { Upload } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { DragAndDropFileFieldProps } from '@/components/drag-and-drop-file-field/types'

export const DragAndDropFileField: React.FC<DragAndDropFileFieldProps> = ({
  children = 'Choose files',
  className,
  description = 'Drag and drop files here, or click to browse.',
  name,
  id,
  disabled,
  onChange,
  onFiles,
  ...props
}: DragAndDropFileFieldProps): Children => {
  const [dragging, setDragging] = useState(false)

  const field = use(FieldContext)
  const input = useRef<HTMLInputElement>(null)

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setDragging(false)

    if (disabled || event.dataTransfer.files.length === 0) {
      return
    }

    if (input.current) {
      input.current.files = event.dataTransfer.files
    }

    onFiles?.(event.dataTransfer.files)
  }

  return (
    <label
      onDragEnter={(event) => {
        event.preventDefault()
        setDragging(!disabled)
      }}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer')}
    >
      <Box
        className={cn(
          'border-dashed',
          dragging && 'border-outline-accent bg-surface-secondary',
          className
        )}
      >
        <BoxContent padding='none' className='p-8'>
          <input
            {...props}
            ref={input}
            name={name ?? field?.name}
            id={id ?? field?.name}
            type='file'
            disabled={disabled}
            onChange={(event) => {
              if (event.target.files) {
                onFiles?.(event.target.files)
              }

              onChange?.(event)
            }}
            className='sr-only'
          />

          <Column className='gap-4 justify-center'>
            <Upload className='size-12 text-tertiary' />

            <Column>
              <Heading size='h3'>{children}</Heading>
              {description && (
                <Heading size='h4' className='text-tertiary'>
                  {description}
                </Heading>
              )}
            </Column>
          </Column>
        </BoxContent>
      </Box>
    </label>
  )
}
DragAndDropFileField.displayName = 'DragAndDropFileField'
