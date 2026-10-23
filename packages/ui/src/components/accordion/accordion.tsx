import type React from 'react'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

import type { AccordionProps } from '@/components/accordion/types'

export const Accordion: React.FC<AccordionProps> = ({
  items,
  name,
  defaultOpen = [],
  className,
  ...props
}: AccordionProps): React.ReactNode => {
  return (
    <div
      {...props}
      className={cn(
        'w-full divide-y divide-outline overflow-hidden rounded-2xl border border-outline bg-surface-primary',
        className
      )}
    >
      {items.map((item, index) => {
        const id = item.id ?? String(index)

        return (
          <details key={id} name={name} open={defaultOpen.includes(id)} className='group'>
            <summary
              className={cn(
                'flex cursor-pointer list-none select-none items-center justify-between gap-3 px-4 py-3 font-medium text-content-primary [&::-webkit-details-marker]:hidden',
                item.disabled && 'pointer-events-none opacity-50'
              )}
            >
              {item.title}
              <ChevronDown className='size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180' />
            </summary>

            <div className='px-4 pb-4 text-sm text-content-secondary'>{item.content}</div>
          </details>
        )
      })}
    </div>
  )
}
