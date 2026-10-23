import type { ComponentProps, ReactNode } from 'react'

import type { Orientation } from '@/lib/variants'

export type FieldProps = ComponentProps<'div'> & {
  name: string
  id?: string
  error?: ReactNode
  orientation?: Orientation
  disabled?: boolean
  required?: boolean
  contentClassName?: string
}
