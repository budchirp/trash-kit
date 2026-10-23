import type { ComponentProps, ReactNode } from 'react'

export type SectionProps = Omit<ComponentProps<'div'>, 'title'> & {
  title?: ReactNode
  description?: ReactNode
  divider?: boolean
  subsection?: boolean
  contentClassName?: string
}
