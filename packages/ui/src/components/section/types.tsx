import type { ComponentProps } from 'react'

export type SectionProps = Omit<ComponentProps<'div'>, 'title'> & {
  children?: Children
  title?: Children
  description?: Children
  divider?: boolean
  subsection?: boolean
}
