import type { ComponentProps } from 'react'

export type FieldProps = ComponentProps<'div'> & {
  label?: Children | string
  error?: Children | string
  type?: 'column' | 'row'
}
