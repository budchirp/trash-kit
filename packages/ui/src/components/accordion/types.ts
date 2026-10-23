import type { ComponentProps, ReactNode } from 'react'

export type AccordionItem = {
  id?: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type AccordionProps = Omit<ComponentProps<'div'>, 'children'> & {
  items: AccordionItem[]
  name?: string
  defaultOpen?: string[]
}
