import type { ComponentProps, ReactNode } from 'react'

export type BreadcrumbItem = {
  label: ReactNode
  href?: string
}

export type BreadcrumbProps = Omit<ComponentProps<'nav'>, 'children'> & {
  items: BreadcrumbItem[]
  separator?: ReactNode
}
