import type { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'div'> & {
  children?: Children
}
