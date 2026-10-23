import type { ComponentProps } from 'react'

export type PaginationProps = Omit<ComponentProps<'nav'>, 'onChange'> & {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  siblingCount?: number
}
