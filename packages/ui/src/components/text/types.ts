import type { ComponentProps } from 'react'

export type TextProps = ComponentProps<'p'> & {
  children?: Children
}
