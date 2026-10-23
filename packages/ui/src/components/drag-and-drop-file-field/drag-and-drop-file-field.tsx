'use client'

import type React from 'react'
import { useRef, useState } from 'react'

import { Box, BoxContent } from '@/components/box'
import { Column } from '@/components/column'
import { useOptionalFieldContext } from '@/components/field/context'
import { Heading } from '@/components/heading'
import { Upload } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { DragAndDropFileFieldProps } from '@/components/drag-and-drop-file-field/types'

export const DragAndDropFileField: React.FC<DragAndDropFileFieldProps> = ({
  children = 'Choose files',
  className,
  contentClassName,
  description = 'Drag and drop files here, or click to browse.',
  color,
  name,
  id,
  disabled,
  required,
  onChange,
  onFiles,
  ...props
}: DragAndDropFileFieldProps): React.ReactNode => {
  const [dragging, setDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const field = useOptionalFieldContext()
  const input = useRef<HTMLInputElement>(null)
  const isDisabled = disabled ?? field?.disabled

  const setSelectedFiles = (fileList: FileList) => {
    setFiles(Array.from(fileList))
    onFiles?.(fileList)
  }

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setDragging(false)

    if (isDisabled || event.dataTransfer.files.length === 0) {
      return
    }

    if (input.current) {
      input.current.files = event.dataTransfer.files
    }

    setSelectedFiles(event.dataTransfer.files)
  }

  return (
    <label
      onDragEnter={(event) => {
        event.preventDefault()
        setDragging(!isDisabled)
      }}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer', className)}
    >
      <Box
        color={color}
        className={cn(
          'border-dashed hover:border-outline-hover',
          dragging && 'border-outline-accent',
          contentClassName
        )}
      >
        <BoxContent padding='none' className='p-8'>
          <input
            {...props}
            ref={input}
            name={name ?? field?.name}
            id={id ?? field?.id}
            type='file'
            disabled={isDisabled}
            required={required ?? field?.required}
            aria-invalid={props['aria-invalid'] ?? field?.invalid}
            aria-describedby={props['aria-describedby'] ?? field?.describedBy}
            onChange={(event) => {
              if (event.target.files) {
                setSelectedFiles(event.target.files)
              }

              onChange?.(event)
            }}
            className='sr-only'
          />

          <Column className='justify-center gap-4'>
            <Upload className='size-12 opacity-60' />

            <Column>
              <Heading size='h3'>{children}</Heading>
              {description && files.length < 1 && (
                <Heading size='h4' className='opacity-60'>
                  {description}
                </Heading>
              )}

              {files.length > 0 && (
                <Column className='gap-1 opacity-60'>
                  {files.map((file) => (
                    <span
                      key={`${file.name}-${file.size}-${file.lastModified}`}
                      className='truncate'
                    >
                      {file.name}
                    </span>
                  ))}
                </Column>
              )}
            </Column>
          </Column>
        </BoxContent>
      </Box>
    </label>
  )
}
