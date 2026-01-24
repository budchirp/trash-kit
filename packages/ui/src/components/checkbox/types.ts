import type { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<'input'> & {
  children?: Children
  className?: string
}
