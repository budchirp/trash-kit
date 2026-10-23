import type { ComponentProps, ReactNode } from 'react'

export type BackdropProps = Omit<ComponentProps<'div'>, 'children'> & {
  open: boolean
  onClose?: () => void
  children?: ReactNode
}
