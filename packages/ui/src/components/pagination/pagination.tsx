'use client'

import type React from 'react'

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { PaginationProps } from '@/components/pagination/types'

const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

const getPaginationItems = (
  page: number,
  pageCount: number,
  siblingCount: number
): (number | 'ellipsis')[] => {
  const totalNumbers = siblingCount * 2 + 5

  if (pageCount <= totalNumbers) {
    return range(1, pageCount)
  }

  const leftSibling = Math.max(page - siblingCount, 1)
  const rightSibling = Math.min(page + siblingCount, pageCount)
  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < pageCount - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 3 + siblingCount * 2), 'ellipsis', pageCount]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, 'ellipsis', ...range(pageCount - (3 + siblingCount * 2) + 1, pageCount)]
  }

  return [1, 'ellipsis', ...range(leftSibling, rightSibling), 'ellipsis', pageCount]
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps): React.ReactNode => {
  const currentPage = Math.min(Math.max(page, 1), Math.max(pageCount, 1))
  const items = getPaginationItems(currentPage, pageCount, siblingCount)

  const goTo = (nextPage: number) => {
    if (nextPage < 1 || nextPage > pageCount || nextPage === currentPage) {
      return
    }

    onPageChange(nextPage)
  }

  return (
    <nav
      {...props}
      aria-label='pagination'
      className={cn('flex w-full flex-wrap items-center gap-1', className)}
    >
      <button
        type='button'
        aria-label='Previous page'
        disabled={currentPage <= 1}
        onClick={() => goTo(currentPage - 1)}
        className='inline-flex size-9 items-center justify-center rounded-full border border-outline text-content-primary transition-colors hover:bg-surface-secondary disabled:pointer-events-none disabled:opacity-50'
      >
        <ChevronLeft className='size-4' />
      </button>

      {items.map((item, index) =>
        item === 'ellipsis' ? (
          <span
            key={`ellipsis-${index}`}
            className='inline-flex size-9 items-center justify-center text-content-tertiary'
          >
            <MoreHorizontal className='size-4' />
          </span>
        ) : (
          <button
            key={item}
            type='button'
            aria-label={`Page ${item}`}
            aria-current={item === currentPage ? 'page' : undefined}
            onClick={() => goTo(item)}
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-full border text-sm transition-colors',
              item === currentPage
                ? 'border-outline-accent bg-surface-accent text-surface-content-accent'
                : 'border-outline text-content-primary hover:bg-surface-secondary'
            )}
          >
            {item}
          </button>
        )
      )}

      <button
        type='button'
        aria-label='Next page'
        disabled={currentPage >= pageCount}
        onClick={() => goTo(currentPage + 1)}
        className='inline-flex size-9 items-center justify-center rounded-full border border-outline text-content-primary transition-colors hover:bg-surface-secondary disabled:pointer-events-none disabled:opacity-50'
      >
        <ChevronRight className='size-4' />
      </button>
    </nav>
  )
}
