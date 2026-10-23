import type React from 'react'

import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { BreadcrumbProps } from '@/components/breadcrumb/types'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
  ...props
}: BreadcrumbProps): React.ReactNode => {
  return (
    <nav {...props} aria-label='breadcrumb' className={cn('w-full', className)}>
      <ol className='flex flex-wrap items-center gap-2 text-sm'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className='flex items-center gap-2'>
              {index > 0 && (separator ?? <ChevronRight className='size-4 opacity-60' />)}

              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className='text-content-tertiary transition-colors hover:text-content-primary'
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'font-medium text-content-primary' : 'text-content-tertiary'}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
