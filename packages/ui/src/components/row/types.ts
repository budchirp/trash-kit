import type { ComponentProps } from 'react'

export type RowProps = ComponentProps<'div'> & {
  children?: Children
}
