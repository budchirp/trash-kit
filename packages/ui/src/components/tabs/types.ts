import type { ComponentProps, ReactNode } from 'react'

export type TabsProps = Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange'> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children?: ReactNode
}

export type TabsListProps = ComponentProps<'div'>

export type TabsTriggerProps = Omit<ComponentProps<'button'>, 'value' | 'type'> & {
  value: string
}

export type TabsContentProps = Omit<ComponentProps<'div'>, 'value'> & {
  value: string
}
