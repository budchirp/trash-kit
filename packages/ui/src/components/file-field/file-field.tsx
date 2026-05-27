'use client'

import type React from 'react'

import { Input } from '@/components/input'
import { Upload } from 'lucide-react'

import type { FileFieldProps } from '@/components/file-field/types'

export const FileField: React.FC<FileFieldProps> = ({
  icons: { leading, trailing } = {},
  ...props
}: FileFieldProps): Children => {
  return (
    <Input
      {...props}
      type='file'
      icons={{
        leading: leading ?? <Upload className='size-4 shrink-0 text-tertiary' />,
        trailing: trailing
      }}
    />
  )
}
FileField.displayName = 'FileField'
