import type { ComponentProps } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  name: string
  error?: Children | string
  type?: 'column' | 'row'
}
