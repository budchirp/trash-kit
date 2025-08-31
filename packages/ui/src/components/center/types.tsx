import type { ComponentProps } from 'react'

export type CenterProps = ComponentProps<'div'> & {
  children?: Children
}
