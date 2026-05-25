import type { ComponentProps } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  name: string
  error?: Children
  type?: 'column' | 'row'
}
