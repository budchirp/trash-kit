import type { ComponentProps } from 'react'

export type FileFieldProps = ComponentProps<'input'> & {
  children?: Children
}
