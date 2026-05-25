import type { ComponentProps } from 'react'

export type BackdropProps = Omit<ComponentProps<'div'>, 'children'> & {
  open: boolean
  onClose?: () => void
}
