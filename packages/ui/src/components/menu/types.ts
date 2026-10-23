import type { ComponentProps, ReactNode } from 'react'

export type MenuTriggerProps = ComponentProps<'button'>

export type MenuContentProps = {
  children?: ReactNode
  className?: string
}

export type MenuItemProps = ComponentProps<'button'>
