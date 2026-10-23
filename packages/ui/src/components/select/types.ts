import type { ComponentProps } from 'react'

export type SelectProps = Omit<ComponentProps<'select'>, 'color'> & {
  selectClassName?: string
}
